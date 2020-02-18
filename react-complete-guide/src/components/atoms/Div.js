import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.backgroundColor};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`;

export default Div;
