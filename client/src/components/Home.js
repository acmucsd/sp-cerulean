import "date-fns";
import React, { useContext } from "react";
// import { ReactComponent as Computers } from "./computers.svg";
import { Grid, Paper, Box, Typography, TextField, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { UserContext } from "../UserContext";
import { Redirect } from "react-router-dom";
import AverageChart from "./AverageChart";
import HeatMap from "./HeatMap";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "60%",
    maxHeight: "60%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 200,
  },
  divider: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  heatMap: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
}));

const Home = () => {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const [type, setType] = React.useState("10");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  if (user.token === null) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {/*<Box
            fontWeight="fontWeightBold"
            fontSize={36}
            fontFamily="Nunito"
            textAlign="left"
            style={{ padding: 10 }}
          >
            Event Attendance
      </Box>*/}
      
      <Grid container direction="row" alignItems="center" spacing={4} style={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.heatMap}>
            <HeatMap />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Grid container direction="row" alignItems="center" spacing={4} style={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>              
            <AverageChart numberOfEvents={5} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Footer />
      {/* <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box
            fontWeight="fontWeightBold"
            fontSize={36}
            fontFamily="Nunito"
            textAlign="left"
            style={{ padding: 10 }}
          >
            DEPRECATED: <br />Predictions
          </Box>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">NEW EVENT</Typography>
              <TextField
                id="event"
                margin="dense"
                variant="outlined"
                className={classes.textField}
              />
              <Typography variant="body1">DATE</Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="dense"
                  id="date-picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  className={classes.textField}
                  inputVariant="outlined"
                />
              </MuiPickersUtilsProvider>
              <Typography variant="body1">TIME</Typography>
              <form className={classes.container} noValidate>
                <TextField
                  id="time"
                  type="time"
                  defaultValue="07:30"
                  variant="outlined"
                  margin="dense"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </form>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">TAGS</Typography>
          <Paper className={classes.paper}>tags</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Predict Button & results</Paper>
        </Grid>
      </Grid>
      <Box
        fontWeight="fontWeightBold"
        fontSize={36}
        fontFamily="Nunito"
        textAlign="left"
        style={{ padding: 10 }}
      >
        Recommendations
      </Box>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Event 1</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Event 2</Paper>
        </Grid>
      </Grid> */}
    </div>
  );
};
export default Home;
