import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Typography, Grid } from "@material-ui/core";
import { COLORS } from "./../constants";
import moment from 'moment'

const columns = [
  { id: "nrp", label: "NRP", minWidth: 100, align: "center" },
  { id: "nama", label: "Nama", minWidth: 200, align: "center" },
  {
    id: "waktu",
    label: "Waktu",
    minWidth: 100,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(nrp, nama, waktu, status) {
  let color;
  switch (status) {
    case "hadir":
      color = COLORS.status.hadir;
      break;
    case "alpa":
      color = COLORS.status.alpa;
      break;
    case "izin":
      color = COLORS.status.izin;
      break;
    case "terlambat":
      color = COLORS.status.telat;
      break;
    }
    if (waktu === null)
        waktu = 'Alpa'
    else if (status === 'izin')
        waktu = 'Izin'
    else
        waktu = moment(waktu).format('H:mm')
    
  return { nrp, nama, waktu, color };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 370,
    minHeight: 350,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 370,
    },
  },
}));

export default function StickyHeadTable({ data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataTable, setDataTable] = React.useState([]);

  React.useEffect(() => {
      setDataTable(myRow());
      console.log(data)
  }, [data]);

  function myRow() {
    let array = [];

    for (let key in data) {
      array.push(
        createData(data[key].student.id, data[key].student.name, data[key].time, data[key].status)
        );
    }

    return array;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper component={Grid} item container className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ tableLayout: "fixed" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "waktu" ? (
                            <Typography
                              style={{
                                fontWeight: "700",
                                color: `${row.color}`,
                              }}
                            >
                              {value}
                            </Typography>
                          ) : (
                            <Typography variant="subtitle2">{value}</Typography>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
