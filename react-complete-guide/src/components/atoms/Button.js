import styled from 'styled-components';
import { APP_COLOR } from '@/styles';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.backgroundColor || APP_COLOR.PURE_BLACK};
  padding: 8px 16px;
  border: ${props => props.border || 'none'};
  display: ${props => props.display || 'flex'};
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  cursor: ${props => (!props.disabled ? 'pointer' : 'default')};
  :hover {
    background-color: ${props => props.hoverBackgroundColor || APP_COLOR.WHITE};
  }
`;

export default Button;
