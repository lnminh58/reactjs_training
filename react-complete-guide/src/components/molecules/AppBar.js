import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Text, FlexContainer, Button } from '@/components/atoms';
import { APP_COLOR, BREAK_POINT } from '@/styles';

export const NavBar = styled.div`
  background-color: ${APP_COLOR.PURE_BLACK};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 20px);
  box-shadow: 0px 2px 10px ${APP_COLOR.PURE_BLACK};
  @media ${BREAK_POINT.sm_and_down} {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;

export const NavMenu = styled.ul`
  flex-grow: 1;
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  transition: visibility 1s ease-in-out, max-height 1s ease-in-out;
  overflow-y: hidden;
  @media ${BREAK_POINT.sm_and_down} {
    display: unset;
    max-height: ${props => (props.isCollapseMenu ? '0px' : '1000px')};
    visibility: ${props => (props.isCollapseMenu ? 'hidden' : 'visible')};
  }
`;

export const NavItem = styled.li`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${BREAK_POINT.sm_and_down} {
    margin: 10px 0;
    height: 40px;
  }
`;

class AppBar extends Component {
  static propTypes = {
    isSmallScreen: PropTypes.bool.isRequired,
    renderMenuItems: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isCollapseMenu: true,
    };
  }

  componentDidUpdate() {}

  toogleMenu = () => {
    const { isCollapseMenu } = this.state;
    this.setState({ isCollapseMenu: !isCollapseMenu });
  };

  render() {
    const { isCollapseMenu } = this.state;
    const { isSmallScreen, renderMenuItems } = this.props;

    return (
      <NavBar>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Text
            color={APP_COLOR.WHITE}
            fontSize="25px"
            fontWeight="700"
            padding="5px 10px"
          >
            Logo
          </Text>
          <Button
            display={!isSmallScreen ? 'none' : null}
            onClick={this.toogleMenu}
          >
            <GiHamburgerMenu size="25px" color={APP_COLOR.WHITE} />
          </Button>
        </FlexContainer>
        <NavMenu isCollapseMenu={isCollapseMenu}>{renderMenuItems()}</NavMenu>
      </NavBar>
    );
  }
}

export default AppBar;
