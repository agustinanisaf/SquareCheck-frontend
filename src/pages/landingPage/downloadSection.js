import React from 'react'
import { Section } from "./../../components";
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core'
import {Android, DesktopWindows} from '@material-ui/icons'
import {COLORS} from './../../constants'

export default function downloadSection() {
    return (
      <Section title="Download">
        <Grid item container xs={12} sm justify="flex-end">
          <Button
            size="large"
            color="primary"
            variant="contained"
            startIcon={<DesktopWindows />}
            href="https://s3.square-check.me/downloads/publish.htm"
          >
            <Typography>Download for Windows</Typography>
          </Button>
        </Grid>
        <Grid item container xs={12} sm justify="flex-start">
          <Button
            size="large"
            color="primary"
            variant="contained"
            startIcon={<Android />}
            href="https://s3.square-check.me/downloads/app-release.apk"
          >
            <Typography>Download for Android</Typography>
          </Button>
        </Grid>
      </Section>
    );
}
