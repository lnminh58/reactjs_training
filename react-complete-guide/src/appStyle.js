import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { APP_COLOR } from '@/styles';

const NavLinkStyled = styled(NavLink)`
  width: 100%;
  height: 100%;
  color: ${APP_COLOR.WHITE};
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans';
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0 5px;
  :hover {
    background-color: ${APP_COLOR.DANGER};
  }
`;

const styles = () => ({});

export { NavLinkStyled as NavLink };

export default styles;
