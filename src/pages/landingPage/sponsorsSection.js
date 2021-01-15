import React from "react";
import { Section } from "./../../components";
import {
  Alterra, MaulidanGames, PTI,
  Profilku, RasyidInstitute, RasyidTech,
  Sindika, Trustmedis, Virtuahive
} from './../../assets/sponsors'
import {Grid} from '@material-ui/core'

const sponsors = [
  Virtuahive,
  RasyidTech,
  PTI,
  MaulidanGames
]

const supporter = [
  Sindika,
  RasyidInstitute,
  Trustmedis,
  Profilku,
  Alterra
]

export default function sponsorsSection() {
  return (
    <>
      <Section title="Sponsored by" style={{ paddingBottom: "8em" }}>
        {sponsors.map((sponsor) => (
          <Grid item xs={12} sm container justify="center">
            <img style={{ height: "2em" }} src={sponsor} />
          </Grid>
        ))}
      </Section>
      <Section title="Supported by" style={{ paddingBottom: "8em" }}>
        {supporter.map((sponsor) => (
          <Grid item xs={12} sm container justify="center">
            <img style={{ height: "2em" }} src={sponsor} />
          </Grid>
        ))}
      </Section>
    </>
  );
}
