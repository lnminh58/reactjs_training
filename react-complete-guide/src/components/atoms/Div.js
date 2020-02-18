import styled from 'styled-components';

const Div = styled.div`
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`;

export default Div;
