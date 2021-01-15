import React from 'react'
import { Section } from './../../components'
import { Aan, Agustin, Fadli, Nafis, Riza } from './../../assets/profile'
import { Grid, Typography } from '@material-ui/core'
import Profile from './profileComponent'

const teams = [
  {
    name: "Agustin",
    image: Agustin,
  },
  {
    name: "Fadli",
    image: Fadli,
  },
  {
    name: "Nafis",
    image: Nafis
  },
  {
    name: "Fahreza",
    image: Aan,
  },
  {
    name: "Riza",
    image: Riza,
  },
];

export default function teamSection() {
    return (
        <Section title='Developer Team' style={{ paddingTop: '8em' }}>
            {teams.map(team => (
                    <Profile key={team.name} name={team.name} image={team.image}/>
            ))}
        </Section>
    )
}
