import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Line } from "react-chartjs-2";

export default function CardChart({ dataset, name, color }) {
  return (
    <Card style={{ backgroundColor: `${color}` }}>
      <CardContent>
        <Line
          height={"25%"}
          data={dataset}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
            tooltips: {
              enabled: false,
            },
            scales: {
              yAxes: [
                {
                  display: false,
                },
              ],
              xAxes: [
                {
                  display: false,
                },
              ],
            },
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          }}
        />
        <Typography variant="h5" align="right" style={{paddingTop: ".5em"}} color="textSecondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
