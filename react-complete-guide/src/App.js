import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import FashionBlog from '@/pages/FashionBlog';
import CoffeeStore from '@/pages/CoffeeStore';
import About from '@/pages/About';
import { AppBar } from '@/components/molecules';
import './App.css';

import { appTheme } from './config/theme';

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <ThemeProvider theme={appTheme}>
        <Router>
          <div>
            <AppBar />
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

export default App;
