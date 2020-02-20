import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
  margin: 0;
  padding: 0;
  display: flex;
  transition: visibility 1s ease-in-out, max-height 1s ease-in-out;
  overflow-y: hidden;
  @media ${BREAK_POINT.sm_and_down} {
    display: unset;
    padding-bottom: 5px;
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
    padding: 5px 0;
    height: 40px;
  }
  :hover {
    background-color: ${APP_COLOR.DANGER};
  }
`;

class AppBar extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isCollapseMenu: true,
    };
  }

  componentDidUpdate() {}

  toogleMenu = () => {
    const { width } = this.props;
    const { isCollapseMenu } = this.state;
    const isSmallScreen = !isWidthUp('sm', width);
    this.setState({ isCollapseMenu: !isCollapseMenu });
  };

  render() {
    const { isCollapseMenu } = this.state;
    const { width } = this.props;

    const isSmallScreen = !isWidthUp('sm', width);

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
        <NavMenu isCollapseMenu={isCollapseMenu}>
          <NavItem>
            <Text
              color={APP_COLOR.WHITE}
              fontSize="20px"
              fontWeight="400"
              padding="0px 10px"
            >
              Fashion Blog
            </Text>
          </NavItem>
          <NavItem>
            <Text
              color={APP_COLOR.WHITE}
              fontSize="20px"
              fontWeight="400"
              padding="0px 10px"
            >
              Coffee Store
            </Text>
          </NavItem>
          <NavItem>
            <Text
              color={APP_COLOR.WHITE}
              fontSize="20px"
              fontWeight="400"
              padding="0px 10px"
            >
              About
            </Text>
          </NavItem>
        </NavMenu>
      </NavBar>
    );
  }
}

export default withWidth()(AppBar);
