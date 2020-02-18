import styled from 'styled-components';

import Div from './Div';

const FlexContainer = styled(Div)`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-content: ${props => props.alignContent || 'center'};
  flex-wrap: ${props => props.flexWrap};
`;

export default FlexContainer;
