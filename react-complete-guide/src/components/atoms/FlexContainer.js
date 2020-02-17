import React from 'react';

import styled from 'styled-components';
import { APP_COLOR } from '../../styles';

const FlexContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-content: ${props => props.alignContent || 'center'};
`;

export default FlexContainer
