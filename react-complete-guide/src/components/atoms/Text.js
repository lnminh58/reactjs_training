import styled from 'styled-components';

import { APP_COLOR } from '@/styles';

const Text = styled.div`
  font-size: ${props => props.fontSize || '15px'};
  display: ${props => props.display || 'block'};
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.color || APP_COLOR.PURE_BLACK};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  font-weight: ${props => props.fontWeight || 'nomarl'};
  line-height: ${props => props.lineHeight};
  text-transform: ${props => props.textTransform || 'none'};
  background-color: ${props => props.backgroundColor};
`;

export default Text;
