import React, { useState } from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, makeStyles, Button } from '@material-ui/core';
import moment from 'moment';

//import 'moment/local/es';
//moment.local('es);

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
    padding: 0,
    marginTop: 50,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

var today = new Date().getDate() - 4;
function App() {

  const [days, setDays] = React.useState([]);

  const handleGetWeather = () => {
    var promise = fetch('http://api.openweathermap.org//data/2.5/forecast?q=Cali,co&APPID=79596a3b0efba5c91d3af2f7826d7a07');

    promise.then((info) => {
      return info.json();
    })
      .then((info) => {
        var list = info.list.filter((element, index) => {
          //Filter si retorna true lo deja, si es false lo saca
          return index % 8 == 0;
        });

        list = list.map((element, index, array) => {
          return {
            day: moment.unix(element.dt).format('ddd'),
            icon: `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`,
            min: Math.round(element.main.temp_min - 273.15) + '°',
            max: Math.round(element.main.temp_max - 273.15) + '°',
          }
        });

        setDays(list);
        console.log(days);
      });
  }

  const classes = useStyles();

  function getDay() {
    let day = new Date().getDay();
    switch (day) {
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      case 7:
        return "Sun";
      default:
        return "";
    }
  }

  return (
    <div className={classes.container}>

      <h1 className={classes.title}>Weather App</h1>

      <Button onClick={handleGetWeather} variant="contained" color="secondary" className={classes.button}>
        Get Weather Info
      </Button>

      <Grid container spacing={2} className={classes.content}>

        {days && days.map((item) =>
          <Grid item md={1} key={item.day}>
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
