import React from 'react'
import { Section } from "./../../components";
import { Grid, Typography } from '@material-ui/core'
import classes from './supervisor.module.scss'

const profiles = [
  {
    name: "Umi Sa'adah",
    position: "Dosen Informatika PENS",
  },
  {
    name: "Desy Intan Permatasari",
    position: "Dosen Informatika PENS",
  },
  {
    name: "Andhik Ampuh Yunanto",
    position: "Dosen Informatika PENS",
  },
  {
    name: "Maulidan Bagus Afridian Rasyid",
    position: "Founder Maulidan Games & Rasyid Technologies",
  },
  {
    name: "Willy Achmat Fauzi",
    position: "CEO Sindika",
  },
  {
    name: "Verent Flourencia Irene",
    position: "UX Designer Maulidan Games",
  },
  {
    name: "Mayshella Ainun Wakhidah",
    position: "Mahasiswa Teknik Informatika PENS",
  },
  {
    name: "Andika Ahmad Ramadhan",
    position: "Mahasiswa Teknik Informatika PENS",
  },
  {
    name: "Fandi Ahmad",
    position: "Mahasiswa Teknik Informatika PENS",
  },
  {
    name: "Ardian Kristya Pratama",
    position: "Mobile Developer AlinaMed & Ikkat Inovasi Technology",
  },
  {
    name: "Agga Pradipta Kurnia Putra",
    position: "CTO AlinaMed & Ikkat Inovasi Technology",
  },
  {
    name: "Muhammad Alif Pradipta",
    position: "Mobile Developer Sindika",
  },
  {
    name: "Rafly Arief Kanza",
    position: "Owner & Full Stack Developer punggawastudio.com",
  },
  {
    name: "Ahmad Jarir At Thobari",
    position: "Software Engineer Rasyid Technologies",
  },
  {
    name: "Ajie Dibyo Respati",
    position: "Mahasiswa Teknik Informatika PENS",
  },
  {
    name: "Achmad Zulkarnain",
    position: "CEO & Co-Founder TrustMedis",
  },
  {
    name: "Arie Affianto",
    position: "Founder Profilku Mobile & Samsung Developer Warrior",
  },
  {
    name: "Tegar Imansyah",
    position: "Software RnD in System Architect Alterra",
  },
];

function Profile (props) { return (
  <Grid item container xs={12} sm={6} md={4} style={{ padding: "1.5em 1em" }}>
    <Grid item container xs={12}>
      <Typography className={classes.Name}>{props.name}</Typography>
    </Grid>
    <Grid item container xs={12}>
      <Typography variant="subtitle2" style={{paddingTop: '.2em'}}>{props.position}</Typography>
    </Grid>
  </Grid>
);};

export default function supervisorsSection() {
    return (
        <Section title='Supervisors & Mentor'>
            {profiles.map((row) => (
                <Profile key={row.name} name={row.name} position={row.position} />
            ))}
        </Section>
    )
}
