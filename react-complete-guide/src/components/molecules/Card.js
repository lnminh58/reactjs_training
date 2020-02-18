import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { APP_COLOR } from '@/styles';
import { Div, Text } from '@/components/atoms';

const Title = styled(Text)`
  font-family: 'Oswald', sans-serif;
`;

const Card = ({ children, cardTitle, containerProps, titleProps }) => (
  <>
    <Div backgroundColor={APP_COLOR.PURE_BLACK} {...containerProps}>
      <Title color={APP_COLOR.PURE_WHITE} fontSize="20px" {...titleProps}>
        {cardTitle}
      </Title>
    </Div>
    {children}
  </>
);

Card.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.element,
  containerProps: PropTypes.object,
  titleProps: PropTypes.object,
};

export default Card;
