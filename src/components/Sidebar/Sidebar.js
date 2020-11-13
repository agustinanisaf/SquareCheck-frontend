import React, {useEffect} from 'react'
import ListItemLink from './ListItemLink'
import {
  Grid, List, ListItem, ListItemText,
  ListItemAvatar, Avatar
} from '@material-ui/core'
import { logoWhite, typeLogoWhite } from "./../../assets";
import { Home, Event, ExitToApp, Assignment } from '@material-ui/icons'
import Cookie from 'js-cookie'

export default function Sidebar() {
  const navList = [
    {
      name: "Home",
      path: "/",
      icon: <Home />,
    },
    {
      name: "Matakuliah",
      path: "/matakuliah",
      icon: <Assignment />,
    },
    {
      name: "Kalender Akademik",
      path: "/kalender",
      icon: <Event />,
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
            <Avatar>{ localStorage.getItem('profilePicture')}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={localStorage.getItem('nama')} secondary="Dosen" />
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
