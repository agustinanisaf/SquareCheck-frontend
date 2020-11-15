import React from "react";
import classes from "./Presence.module.scss";
import { Grid, Typography, Button, Table} from "@material-ui/core";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>NRP</th>
                <th>Nama</th>
                <th>Waktu</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.nrp}</td>
          <td>{row.name}</td>
          <td>{row.time}</td>
        </tr>
      )
    })
    
    return (
      <tbody>{rows}</tbody>
    )
  }

const Tables = props => {
    const {characterData} = props;

    return (
        <Table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </Table>
    )
}

export default Tables;