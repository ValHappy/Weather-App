import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core'

function WeatherCard(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.content}>
                <h3 className={classes.title}>{props.day}</h3>
                <img className={classes.img} src={props.icon}></img>
                <p className={classes.info}>
                    <span>{props.min}</span> {props.max}</p>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.grey[600],
        fontSize: '30',
        margin: '0'
    },
    img: {

    },
    info: {
        margin: '0',
        fontSize: '20',
        fontWeight: 'bold',
        color: theme.palette.grey[400],
        '& span': {
            color: theme.palette.grey[600],
        }
    },

}));

export default WeatherCard;