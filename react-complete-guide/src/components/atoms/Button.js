import React from 'react';
import styled from 'styled-components';
import { APP_COLOR } from '../../styles';

const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${APP_COLOR.DARK};
  color: ${APP_COLOR.WHITE};
  margin: 1em;
  padding: 0.4em 3em;
  :hover {
    background-color: ${APP_COLOR.BLACK};
    color: ${APP_COLOR.PURE_WHITE};
  }
`;

const Button = ({children}) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  )
}

export default Button;
