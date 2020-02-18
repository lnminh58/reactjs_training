import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import * as AI from 'react-icons/ai';

import { Button, FlexContainer, Divider, Text } from '@/components/atoms';
import { APP_COLOR } from '@/styles';

const Container = styled.div`
  padding: 20px;
  background-color: ${APP_COLOR.PURE_WHITE};
  margin-bottom: 15px;
`;

const PostText = styled(Text)`
  font-family: 'Oswald', sans-serif;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const PostContent = styled(Text)`
  margin: 15px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans';
  text-align: justify;
  line-height: 1.5em;
`;

const ButtonText = styled.span`
  color: ${props => props.color || APP_COLOR.PURE_BLACK};
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans';
  font-size: 15px;
  font-weight: 500;
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  background-color: ${props => props.backgroundColor || 'none'};
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`;

class Post extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    containerStyle: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisplayReply: false,
    };
  }

  renderReplies(replies) {
    const hasReply = replies.length > 0;
    return (
      <>
        {hasReply && <Divider margin="10px 0" />}
        {replies.map((reply, idx) => {
          const avatarSource = get(reply, 'avatar');
          const name = get(reply, 'name');
          const time = get(reply, 'createdAt');
          const content = get(reply, 'content');

          return (
            <FlexContainer
              key={idx}
              margin="15px 0px"
              justifyContent="flex-start"
            >
              <Avatar src={avatarSource} margin="0 40px 0 0" />
              <FlexContainer direction="column">
                <PostText fontSize="20px" fontWeight="400">
                  {`${name} `}
                  <PostText color={APP_COLOR.LIGHT} display="inline">
                    {moment(time).format('MMMM DD, YYYY, HH:mm A')}
                  </PostText>
                </PostText>
                <PostContent>{content}</PostContent>
              </FlexContainer>
            </FlexContainer>
          );
        })}
      </>
    );
  }

  render() {
    const { data, containerStyle } = this.props;
    const { isDisplayReply } = this.state;

    const title = get(data, 'title');
    const description = get(data, 'description');
    const postCreatedAt = get(data, 'createdAt');
    const image = get(data, 'postImage');
    const detail = get(data, 'detail', '');
    const replies = get(data, 'replies', '');

    const isReplyButtonDisabled = replies.length <= 0;

    return (
      <Container style={containerStyle}>
        <PostText
          fontSize="25px"
          fontWeight="500"
          margin="0 0 15px 0"
          textAlign="center"
        >
          {title}
        </PostText>
        <PostText
          fontSize="18px"
          fontWeight="400"
          margin="0 0 25px 0"
          textAlign="center"
        >
          {`${description}, `}
          <PostText fontSize="18px" color={APP_COLOR.LIGHT} display="inline">
            {moment(postCreatedAt).format('MMM DD, YYYY')}
          </PostText>
        </PostText>
        <PostImage src={image} />
        {detail.split('\n').map((detailPara, idx) => (
          <PostContent key={idx}>{detailPara}</PostContent>
        ))}

        <FlexContainer
          margin="20px 0px 30px 0px"
          justifyContent="space-between"
        >
          <Button
            backgroundColor={APP_COLOR.PURE_WHITE}
            hoverBackgroundColor={APP_COLOR.WHITE}
            border={`1px ${APP_COLOR.WHITE} solid`}
          >
            <AI.AiFillLike color={APP_COLOR.DARK} size={15}></AI.AiFillLike>
            <ButtonText margin="0px 0px 0px 5px">Like</ButtonText>
          </Button>
          <Button
            backgroundColor={APP_COLOR.PURE_BLACK}
            hoverBackgroundColor={
              isReplyButtonDisabled ? APP_COLOR.PURE_BLACK : APP_COLOR.BLACK
            }
            onClick={() => this.setState({ isDisplayReply: !isDisplayReply })}
            disabled={isReplyButtonDisabled}
          >
            <ButtonText margin="0px 5px 0px 0px" color={APP_COLOR.WHITE}>
              Replies
            </ButtonText>
            <ButtonText
              backgroundColor={APP_COLOR.PURE_WHITE}
              padding="2px 8px"
            >
              {replies.length}
            </ButtonText>
          </Button>
        </FlexContainer>
        {isDisplayReply && this.renderReplies(replies)}
      </Container>
    );
  }
}

export default Post;
