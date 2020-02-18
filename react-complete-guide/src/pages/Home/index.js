import React, { Component } from 'react';

import { Container } from '@material-ui/core';
import * as FA from 'react-icons/fa';

import { Button, FlexContainer } from '@/components/atoms';
import { Post, Card } from '@/components/molecules';
import { APP_COLOR } from '@/styles';

import { blogPosts, inspiration, tags } from './fakeData';

import {
  MainText,
  ContentText,
  HeaderBanner,
  HeaderTitle,
  HeaderWelcome,
  HeaderWelcomeTag,
  BannerContainer,
  BannerSmallText,
  BannerLargeText,
  BannerButtonText,
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
          <HeaderTitle>JANE BLOGLIFE</HeaderTitle>
          <HeaderWelcome>
            Welcome to the blog of&nbsp;
            <HeaderWelcomeTag>Jane &apos;s world</HeaderWelcomeTag>
          </HeaderWelcome>
        </HeaderBanner>
      </>
    );
  }

  renderBanner() {
    return (
      <BannerContainer>
        <BannerSmallText>Jane &apos;s</BannerSmallText>
        <BannerLargeText>FASHION BLOG</BannerLargeText>
        <FlexContainer direction="row" justifyContent="flex-start" back>
          <Button
            backgroundColor="rgba(255,255,255,0.6)"
            hoverBackgroundColor={APP_COLOR.WHITE}
          >
            <BannerButtonText>Subscribe</BannerButtonText>
          </Button>
        </FlexContainer>
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
      <Container maxWidth="lg" style={{ padding: '20px 0 0 0' }}>
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
      </Container>
    );
  }
}

export default index;
