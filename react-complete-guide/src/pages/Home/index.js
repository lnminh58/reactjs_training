import React, { Component } from 'react';

import { Box, Container } from '@material-ui/core';

import { Button } from '../../components/atoms';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <p>this is home page</p>
          <Button>hello</Button>
        </Container>
      </>
    );
  }
}

export default index;
