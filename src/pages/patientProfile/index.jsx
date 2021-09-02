import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Appointment from '../patientProfile/appointment/index'
import PatientForm from './patientForm';
import DailyTx from '../dailyTx/DailyTx';
import MedicalFile from './medicalFile/index';

import Menu from '../../components/Menu';
import "../../style.css";
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 'auto'
    },
    tab: {
        backgroundColor: 'primary',
        textColor: 'white'
    }
});

export default function PatientProfile(props) {

    let classes = useStyles();
    let [value, setValue] = React.useState(parseInt(props.match.params.tab));

    let { patientID, tab } = props.match.params;
    tab = parseInt(tab);

    let handleChange = (event, newValue) => {
        props.history.push(`/patient/${patientID}/${newValue}/0`);
        setValue(newValue);
    };

    return (
        <div className="patientprofile">

            <div className="header">
                <h2>PATIENT PROFILE</h2>
            </div>

            <Paper elevation={1} square className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="secondary"
                >
                    <Tab className={classes.tab} icon={<ListAltIcon />} label="PATIENT FORM" />
                    <Tab icon={<FavoriteBorder />} label="MEDICAL FILE" />
                    <Tab icon={<ScheduleIcon />} label="TAKE APPOINTMENT" />
                </Tabs>
            </Paper>

            {value === 0 && <PatientForm patientID={patientID}/>}
            {value === 1 && <MedicalFile patientID={patientID}/>}
            {value === 2 && <Appointment patientID={patientID}/>}

        </div>
    )
}