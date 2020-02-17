import React from 'react';
import styled from 'styled-components';
import { APP_COLOR } from '../../styles';

const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.backgroundColor || APP_COLOR.PURE_BLACK};
  padding: 8px 16px;
  border: ${props => props.border || 'none'};
  :hover {
    background-color: ${props => props.hoverBackgroundColor || APP_COLOR.WHITE};
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
