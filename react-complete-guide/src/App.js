import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import {
  Toolbar,
  Box,
  Link,
  InputBase,
  IconButton,
} from '@material-ui/core';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import { Search as SearchIcon, Menu as MenuIcon } from '@material-ui/icons';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import FashionBlog from '@/pages/FashionBlog';
import CoffeeStore from '@/pages/CoffeeStore';
import About from '@/pages/About';
import './App.css';

import { appTheme } from './config/theme';

import styles, { AppBarStyled } from './appStyle';

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
  };

  render() {
    const { classes, width } = this.props;
    console.log('media aquery: ', isWidthDown('sm', width));
    console.log('media aquery: ', isWidthUp('md', width));
    return (
      <ThemeProvider theme={appTheme}>
        <Router>
          <div>
            <AppBarStyled position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Box display="flex" flexGrow={1}>
                  <Link
                    component={RouterLink}
                    color="textSecondary"
                    classes={{ root: classes.linkRoot }}
                    to="/"
                  >
                    Fashion Blog
                  </Link>
                  <Link
                    component={RouterLink}
                    color="textSecondary"
                    classes={{ root: classes.linkRoot }}
                    to="/coffee-store"
                  >
                    Coffee Store
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
            </AppBarStyled>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <FashionBlog />
              </Route>
              <Route path="/coffee-store">
                <CoffeeStore />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withWidth()(withStyles(styles)(App));
