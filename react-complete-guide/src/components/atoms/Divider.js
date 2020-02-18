import styled from 'styled-components';

import { APP_COLOR } from '@/styles';

import Div from './Div';

const Divider = styled(Div)`
  width: ${props => props.width || 'inherit'};
  height: ${props => props.height || '1px'};
  background-color: ${props => props.color || APP_COLOR.WHITE};
`;

export default Divider;
