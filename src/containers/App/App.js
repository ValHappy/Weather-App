import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline } from '@material-ui/core';

const days = [
  {
    day: "Lun",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Mar",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Mir",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Jue",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Vie",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Sáb",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Dom",
    icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    min: "70°",
    max: "90°",
  }
];

function App() {
  return (<div>
    <h1>Holi</h1>

    <Grid container spacing={2}>

      {days.map((item) =>
        <Grid item md={1}>
          <WeatherCard
            day={item.day}
            icon={item.icon}
            min={item.min}
            max={item.max}
          />
        </Grid>)}


    </Grid>

    <CssBaseline />
  </div>
  );
}

export default App;
