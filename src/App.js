import React, { Fragment, useRef } from 'react';
import './App.css';
import {Grid, Paper, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PullRequest from './PullRequest.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  const [user, setValueuser] = React.useState(0);
  const [repo, setValuerepo] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setValuerepo({"repo" : reponame.current.value});
    setValueuser({"user" : username.current.value});
  }
  const username = useRef();
  const reponame =useRef();
  return (
    <Fragment>
      <Grid>
        <Grid item  xs={6} sm={6}>
          <form>
          <TextField
							fullWidth
							helperText={"User Name"}
							label="User Name"
							inputRef={username}
							margin="normal"
							// value={state_ip}
							className={classes.textField}
						/>
						<TextField
							fullWidth
							helperText={"Repo Name"}
							label="Repo Name"
							inputRef={reponame}
							margin="normal"
							// value={state_ip}
							className={classes.textField}
						/>
						<Grid container justify="flex-end">
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={handleSubmit}
							>Search</Button>
						</Grid>
          </form>
        </Grid>
        <Grid item xs={6} sm={6}>
          <PullRequest {...user} {...repo} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
