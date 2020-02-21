import React, { Component } from 'react';

import * as FA from 'react-icons/fa';

import { Button, FlexContainer } from '@/components/atoms';
import { Post, Card } from '@/components/molecules';
import { APP_COLOR } from '@/styles';

import { blogPosts, inspiration, tags } from './fakeData';

import {
  MainText,
  ContentText,
  HeaderBanner,
  BannerContainer,
  MainContainer,
  PostContainer,
  SideContainer,
  ImgCardContainer,
  CardFooter,
  InsImgContainer,
  InsImg,
  Input,
} from './styled';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeader() {
    return (
      <>
        <FlexContainer
          justifyContent="space-between"
          backgroundColor={APP_COLOR.PURE_BLACK}
        >
          <FlexContainer>
            <Button hoverBackgroundColor={APP_COLOR.DARK}>
              <FA.FaFacebookSquare color={APP_COLOR.PURE_WHITE} size={20} />
            </Button>
            <Button hoverBackgroundColor={APP_COLOR.DARK}>
              <FA.FaInstagram color={APP_COLOR.PURE_WHITE} size={20} />
            </Button>
            <Button hoverBackgroundColor={APP_COLOR.DARK}>
              <FA.FaBell color={APP_COLOR.PURE_WHITE} size={20} />
            </Button>
          </FlexContainer>
          <Button hoverBackgroundColor={APP_COLOR.DARK}>
            <FA.FaSearch color={APP_COLOR.PURE_WHITE} size={20} />
          </Button>
        </FlexContainer>

        <HeaderBanner>
          <MainText
            fontSize="40px"
            margin="10px 0"
            textAlign="center"
            textTransform="uppercase"
            fontWeight="600"
          >
            JANE BLOGLIFE
          </MainText>
          <MainText
            fontSize="16px"
            margin="0 0 10px 0"
            textAlign="center"
            fontWeight="500"
          >
            Welcome to the blog of&nbsp;
            <MainText
              fontSize="16px"
              margin="0 0 10px 0"
              fontWeight="500"
              color={APP_COLOR.PURE_WHITE}
              backgroundColor={APP_COLOR.PURE_BLACK}
              padding="0 8px"
              display="inline"
            >
              Jane &apos;s world
            </MainText>
          </MainText>
        </HeaderBanner>
      </>
    );
  }

  renderBanner() {
    return (
      <BannerContainer src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
        <MainText
          fontSize="36px"
          textTransform="uppercase"
          fontWeight="600"
          color={APP_COLOR.PURE_WHITE}
        >
          Jane &apos;s
        </MainText>
        <MainText
          fontSize="64px"
          textTransform="uppercase"
          fontWeight="600"
          margin="0 0 10px 0"
          color={APP_COLOR.PURE_WHITE}
        >
          FASHION BLOG
        </MainText>
        <Button
          backgroundColor="rgba(255,255,255,0.6)"
          hoverBackgroundColor={APP_COLOR.WHITE}
        >
          <MainText
            fontSize="18px"
            textTransform="uppercase"
            color={APP_COLOR.BLACK}
          >
            Subscribe
          </MainText>
        </Button>
      </BannerContainer>
    );
  }

  renderPostList() {
    return (
      <>
        {blogPosts.map((postItem, idx) => {
          const containerStyle = { marginBottom: 0 };
          return (
            <Post
              data={postItem}
              key={idx}
              containerStyle={
                idx === blogPosts.length - 1 ? containerStyle : null
              }
            />
          );
        })}
      </>
    );
  }

  renderAboutCard() {
    return (
      <>
        <ImgCardContainer src="https://images.unsplash.com/photo-1516898671633-efce17ccb6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80">
          <CardFooter backgroundColor={APP_COLOR.PURE_BLACK}>
            <MainText
              fontSize="23px"
              margin="10px 0px"
              color={APP_COLOR.PURE_WHITE}
            >
              Clarke Arthur
            </MainText>

            <ContentText
              fontSize="17px"
              fontWeight="300"
              lineHeight="24px"
              margin="10px 0px"
              color={APP_COLOR.PURE_WHITE}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              aperiam dolorem tempore nemo amet! Fuga ullam animi veniam saepe
              voluptatibus exercitationem, officia deleniti nostrum, omnis neque
              modi delectus excepturi inventore? Repellendus iste cupiditate
              itaque ducimus odio est, tempora excepturi, corporis sint, optio
              incidunt quas. Cupiditate quia ratione consectetur temporibus
              tenetur, sint enim suscipit.
            </ContentText>
          </CardFooter>
        </ImgCardContainer>
      </>
    );
  }

  renderTags() {
    return (
      <Card
        cardTitle="Inspiration"
        containerProps={{ margin: '20px 0 0 0', padding: '10px' }}
      >
        <FlexContainer
          flexWrap="wrap"
          backgroundColor={APP_COLOR.PURE_WHITE}
          justifyContent="flex-start"
          padding="10px"
        >
          {tags.map((tag, idx) => (
            <ContentText
              key={idx}
              padding="0 10px"
              color={APP_COLOR.BLACK}
              margin="5px"
              backgroundColor={APP_COLOR.WHITE}
            >
              {tag}
            </ContentText>
          ))}
        </FlexContainer>
      </Card>
    );
  }

  renderInspiration() {
    return (
      <Card
        cardTitle="Inspiration"
        containerProps={{ margin: '20px 0 0 0', padding: '10px' }}
      >
        <FlexContainer
          flexWrap="wrap"
          backgroundColor={APP_COLOR.PURE_WHITE}
          padding="10px 5px"
        >
          {inspiration.map((img, idx) => (
            <InsImgContainer key={idx}>
              <InsImg src={img} />
            </InsImgContainer>
          ))}
        </FlexContainer>
      </Card>
    );
  }

  renderSubscribe() {
    return (
      <Card
        cardTitle="Follow Me"
        containerProps={{ margin: '20px 0 0 0', padding: '10px' }}
      >
        <FlexContainer
          direction="column"
          backgroundColor={APP_COLOR.PURE_WHITE}
          alignItems="strech"
          padding="15px 15px"
        >
          <ContentText margin="0 0 15px 0">
            Enter your e-mail below and get notified on the latest blog posts.
          </ContentText>
          <Input type="email" placeholder="Enter e-mail" />
          <Button
            backgroundColor={APP_COLOR.DANGER}
            hoverBackgroundColor={APP_COLOR.PRIMARY}
          >
            <ContentText fontSize="17px" color={APP_COLOR.PURE_WHITE}>
              Subscribe
            </ContentText>
          </Button>
        </FlexContainer>
      </Card>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderBanner()}
        <MainContainer>
          <PostContainer>{this.renderPostList()}</PostContainer>
          <SideContainer>
            {this.renderAboutCard()}
            {this.renderTags()}
            {this.renderInspiration()}
            {this.renderSubscribe()}
          </SideContainer>
        </MainContainer>
        <FlexContainer
          direction="column"
          backgroundColor={APP_COLOR.PURE_BLACK}
          padding="30px"
        >
          <MainText color={APP_COLOR.PURE_WHITE}>
            Consectetur adipisicing elit. Quam et, delectus saepe ex nostrum
            debitis.
          </MainText>
          <ContentText color={APP_COLOR.LIGHT} fontSize="12px">
            FashionBlog © 2012 - 2020
          </ContentText>
        </FlexContainer>
      </>
    );
  }
}

export default index;
