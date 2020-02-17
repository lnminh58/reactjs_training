import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import { AppBar, Toolbar, Box, Link, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';

import { appTheme } from './config/theme';

import styles from './appStyle';

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={appTheme}>
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar>
                <Box display="flex" flexGrow={1}>
                  <Link
                    component={RouterLink}
                    color="textSecondary"
                    classes={{ root: classes.linkRoot }}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    component={RouterLink}
                    color="textSecondary"
                    to="/about"
                  >
                    About
                  </Link>
                </Box>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </Toolbar>
            </AppBar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
