import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

import AppBar, { NavItem } from '@/components/molecules/AppBar';

import FashionBlog from '@/pages/FashionBlog';
import Coffee from '@/pages/Coffee';
import About from '@/pages/About';
import './App.css';

import { appTheme } from './config/theme';
import { APP_COLOR } from './styles';
import { NavLink } from './appStyle';

class App extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.routes = [
      { path: '/', label: 'Fashion Blog' },
      { path: '/about', label: 'About' },
      { path: '/coffee', label: 'Coffe Store' },
    ];
  }

  renderMenuItems = () => (
    <>
      {this.routes.map((route, idx) => (
        <NavItem key={idx}>
          <NavLink
            exact
            to={route.path}
            activeStyle={{
              backgroundColor: APP_COLOR.DANGER,
            }}
          >
            {route.label}
          </NavLink>
        </NavItem>
      ))}
    </>
  );

  render() {
    const { width } = this.props;
    const isSmallScreen = !isWidthUp('sm', width);

    return (
      <ThemeProvider theme={appTheme}>
        <Router>
          <div>
            <AppBar
              isSmallScreen={isSmallScreen}
              renderMenuItems={this.renderMenuItems}
            />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Container maxWidth="lg" style={{ padding: '100px 0 0 0' }}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <FashionBlog />
                </Route>
                <Route path="/">
                  <Coffee />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withWidth()(App);
