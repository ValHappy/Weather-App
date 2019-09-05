import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, makeStyles } from '@material-ui/core';

const days = [
  {
    day: "Lun",
    icon: "https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png",
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
    icon: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
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
    icon: "https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png",
    min: "70°",
    max: "90°",
  },
  {
    day: "Sáb",
    icon: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
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

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.grey[600],
    fontSize: 40,
    margin: '5'
  }
}));

function App() {

  const classes = useStyles();

  function getDay() {
    let day = new Date().getDay();
    switch (day) {
      case 1:
        return "Lun";
      case 2:
        return "Mar";
      case 3:
        return "Mie";
      case 4:
        return "Jue";
      case 5:
        return "Vie";
      case 6:
        return "Sáb";
      case 7:
        return "Dom";
      default:
        return "";
    }
  }

  return (
    <div className={classes.container}>

      <h1 className={classes.title}>Weather App</h1>

      <Grid container spacing={2} className={classes.content}>

        {days.map((item, index) =>
          <Grid item md={1} key={index}>
            <WeatherCard
              day={item.day}
              icon={item.icon}
              min={item.min}
              max={item.max}
              isToday={item.day === getDay()}
            />
          </Grid>)}


      </Grid>

      <CssBaseline />
    </div>
  );
}

export default App;
