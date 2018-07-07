import React, { Component } from 'react';

import Toolbar from '../toolbar';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
  constructor() {
    super();
    this.state = {
      logged: true,
    }
  }
  
  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  }

  render() {
    return (
      <Toolbar/>
    );
  }
}

export default Header;