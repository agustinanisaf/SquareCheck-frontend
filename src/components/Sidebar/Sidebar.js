import React from 'react'
import ListItemLink from './ListItemLink'
import {
  Grid, List, ListItem, ListItemText,
  ListItemAvatar, Avatar
} from '@material-ui/core'
import { hiIllus, logoWhite, typeLogoWhite } from "./../../assets";
import { Home, Event, ExitToApp, Assignment} from '@material-ui/icons'

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
    path: "/logout",
    icon: <ExitToApp />,
  },
];

export default function Sidebar() {
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
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Darto" secondary="Dosen" />
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
