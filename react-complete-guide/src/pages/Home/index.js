import React, { Component } from 'react';

import { Box, Container } from '@material-ui/core';
import * as FA from 'react-icons/fa';
import { Button, FlexContainer } from '../../components/atoms';

import { APP_COLOR } from '../../styles';
import {
  HeaderBanner,
  HeaderTitle,
  HeaderWelcome,
  HeaderWelcomeTag,
  BannerContainer,
  BannerSmallText,
  BannerLargeText,
  BannerButtonText,
  MainContainer
} from './styled';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeader() {
    return (
      <>
        <FlexContainer justifyContent="space-between" backgroundColor={APP_COLOR.PURE_BLACK}>
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
            Welcome to the blog of <HeaderWelcomeTag>Jane's world</HeaderWelcomeTag>
          </HeaderWelcome>
        </HeaderBanner>
      </>
    );
  }

  renderBanner() {
    return (
      <>
        <BannerContainer>
          <BannerSmallText>Jane 's</BannerSmallText>
          <BannerLargeText>FASHION BLOG</BannerLargeText>
          <FlexContainer direction="row" justifyContent="flex-start" back>
            <Button backgroundColor="rgba(255,255,255,0.6)" hoverBackgroundColor={APP_COLOR.WHITE}>
              <BannerButtonText>Subscribe</BannerButtonText>
            </Button>
          </FlexContainer>
        </BannerContainer>
      </>
    );
  }

  render() {
    return (
      <>
        <Container maxWidth="md" style={{ padding: '20px 0' }}>
          {this.renderHeader()}
          {this.renderBanner()}
          <MainContainer>
            
          </MainContainer>
        </Container>
      </>
    );
  }
}

export default index;
