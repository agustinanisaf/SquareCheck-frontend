import React, { useMemo, forwardRef } from "react";
import PropTypes, { InferProps } from 'prop-types'
import {
    Paper, List, ListItem,
    ListItemText, ListItemIcon,
    Avatar, Grid, Typography
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom'
import { COLORS } from '../../constants'
import {hiIllus, logoWhite, typeLogoWhite} from './../../assets'
import classes from './Sidebar.module.scss'

const navList = [
    {
        name: "Home",
        path: "/"
    }, {
        name: "Matakuliah",
        path: "/matakuliah"
    }, {
        name: "Kalender Akademik",
        path: "/kalender",
    }, {
        name: "Logout",
        path: "/logout"
    }
]

function ListItemLink(props) {
    const { primary, to, icon } = props
    const location = useLocation()

    const renderLink = useMemo(
        () =>
            forwardRef((itemProps, ref) => (
            <Link to={to} ref={ref} {...itemProps}/>
            )),
        [to]
    );

    return (
        <li>
            <ListItem button component={renderLink} selected={to === location.pathname}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText className={classes.font} primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

ListItemLink.defaultProps = {
  selected: false,
};

const Sidebar = () => {

    return (
      <Paper
        elevation={16}
        square
        style={{ backgroundColor: `${COLORS.secondary}` }}
        className={classes.Sidebar}
      >
        <Grid
          container
          justify="center"
          style={{
            backgroundColor: `${COLORS.secondaryDark}`,
            padding: "1.2em",
          }}
        >
          <img src={logoWhite} style={{ height: "25px" }} />
          <img src={typeLogoWhite} style={{ height: "25px", paddingLeft: "10px" }} />
        </Grid>
        <Grid
          container
          style={{ padding: ".5em", paddingLeft: "1em" }}
          className={classes.info}
        >
          <Grid xs={3} item>
            <Avatar sizes="large">D</Avatar>
          </Grid>
          <Grid xs={9} alignItems="center" direction="column" justify="center">
            <Typography style={{ fontWeight: "800" }} className={classes.font}>
              Darto
            </Typography>
            <Typography variant="subtitle2" className={classes.font}>
              Dosen
            </Typography>
          </Grid>
        </Grid>
        <List component="nav">
          {navList.map((list, index) => (
            <ListItemLink
              button
              key={index}
              primary={list.name}
              to={list.path}
            />
          ))}
        </List>
        <img src={hiIllus} className={classes.logo} />
      </Paper>
    );
}

export default Sidebar;
