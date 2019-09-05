import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core'

function WeatherCard(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={props.isToday ? classes.contentSelected : classes.content}>
                <h3 className={classes.title}>{props.day}</h3>
                <img className={classes.img} src={props.icon} alt="Icon"></img>
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
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    contentSelected: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: '30',
        margin: '0'
    },
    img: {

    },
    info: {
        margin: '0',
        fontSize: '20',
        fontWeight: 'bold',
        color: theme.palette.grey[800],
        '& span': {
            color: 'white',
        }
    },

}));

export default WeatherCard;