import styled from 'styled-components';
import { APP_COLOR } from '../../styles';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.backgroundColor || APP_COLOR.PURE_BLACK};
  padding: 8px 16px;
  border: ${props => props.border || 'none'};
  :hover {
    background-color: ${props => props.hoverBackgroundColor || APP_COLOR.WHITE};
  }
`;

export default Button;
