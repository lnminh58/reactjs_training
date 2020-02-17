import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

import { APP_COLOR } from '../../styles';

const Container = styled.div`
  padding: 20px 15px;
  background-color: ${APP_COLOR.PURE_WHITE};
  margin: 15px;
`;

const HeadingTitle = styled.span`
  font-size: 25px;
  display: block;
  text-align: center;
  color: ${APP_COLOR.PURE_BLACK};
  margin: 0 0 5px 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`;

const HeadingDescription = styled(HeadingTitle)`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 15px 0;
`;

const HeadingTime = styled(HeadingDescription)`
  color: ${APP_COLOR.LIGHT};
  display: inline;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const PostContent = styled.p`
  margin: 15px 0;
  color: ${APP_COLOR.PURE_BLACK};
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans';
  text-align: justify;
  line-height: 1.5em;
`;

class Post extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const title = get(data, 'title');
    const description = get(data, 'description');
    const postCreatedAt = get(data, 'createdAt');
    const image = get(data, 'postImage');
    const detail = get(data, 'detail', '');

    return (
      <Container>
        <HeadingTitle>{title}</HeadingTitle>
        <HeadingDescription>
          {`${description}, `}
          <HeadingTime>
            {moment(postCreatedAt).format('MMM DD, YYYY')}
          </HeadingTime>
        </HeadingDescription>
        <PostImage src={image} />
        {detail.split('\n').map((detailPara, idx) => (
          <PostContent key={idx}>{detailPara}</PostContent>
        ))}
      </Container>
    );
  }
}

export default Post;
