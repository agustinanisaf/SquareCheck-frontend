import React from 'react'
import ListItemLink from './ListItemLink'
import {
  Grid, List, ListItem, ListItemText,
  ListItemAvatar, Avatar
} from '@material-ui/core'
import { logoWhite, typeLogoWhite } from "./../../assets";
import { Home, ExitToApp, Assignment } from '@material-ui/icons'

export default function Sidebar() {
  const navList = [
    {
      name: "Home",
      path: "/home",
      icon: <Home />,
    },
    {
      name: "Matakuliah",
      path: "/matakuliah",
      icon: <Assignment />,
    },
    {
      name: "Logout",
      path: "/login",
      icon: <ExitToApp />,
    },
  ];

  return (
    <div>
      <Grid container justify="center" style={{ padding: "1em" }}>
        <img src={logoWhite} style={{ height: "25px" }} />
        <img
          src={typeLogoWhite}
          style={{ height: "25px", paddingLeft: "10px" }}
        />
      </Grid>
      <List>
        <ListItem style={{ paddingBottom: "2em", paddingTop: "2em" }}>
          <ListItemAvatar>
            <Avatar>{ localStorage.getItem('photo')}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={localStorage.getItem('name')} secondary="Dosen" />
        </ListItem>
        {navList.map((data, index) => (
          <ListItemLink
            key={index}
            primary={data.name}
            to={data.path}
            icon={data.icon}
          />
        ))}
      </List>
    </div>
  );
}
