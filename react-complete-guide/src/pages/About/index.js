import React, { Component } from 'react';

import { Container } from '@material-ui/core';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container maxWidth="sm">
          <p>this is About page</p>
        </Container>
      </>
    );
  }
}

export default index;
