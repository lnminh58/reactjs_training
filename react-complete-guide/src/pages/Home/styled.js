import styled from 'styled-components';

import { APP_COLOR, BREAK_POINT } from '@/styles';
import { Div, Text } from '@/components/atoms';

export const MainText = styled(Text)`
  font-family: 'Oswald', sans-serif;
`;

export const ContentText = styled(Text)`
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
`;

export const HeaderBanner = styled.div`
  padding: 48px 16px;
  background-color: ${APP_COLOR.PURE_WHITE};
  color: ${APP_COLOR.PURE_BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 40px;
  margin: 10px 0px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`;

export const HeaderWelcome = styled.span`
  margin: 0px 0 10px 0px;
  font-size: 16;
  text-align: center;
  font-weight: 500;
  font-family: 'Oswald', sans-serif;
`;

export const HeaderWelcomeTag = styled(HeaderWelcome)`
  background-color: ${APP_COLOR.PURE_BLACK};
  color: ${APP_COLOR.PURE_WHITE};
  padding: 0 8px;
  font-family: 'Oswald', sans-serif;
`;

export const BannerContainer = styled.div`
  background-image: url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  /* width: 100%; */
  height: 60vw;
  max-height: 600px;
  padding-left: 24px;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
`;

export const BannerSmallText = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 36;
  color: ${APP_COLOR.PURE_WHITE};
  margin: 0 0 10px 0px;
`;

export const BannerLargeText = styled(BannerSmallText)`
  text-transform: uppercase;
  font-size: 64px;
  @media ${BREAK_POINT.tablet_and_down} {
    display: none;
  }
`;

export const BannerButtonText = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  color: ${APP_COLOR.BLACK};
  text-transform: uppercase;
`;

export const MainContainer = styled.div`
  background-color: ${APP_COLOR.WHITE};
  padding: 20px 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const PostContainer = styled.div`
  flex-basis: 60%;
  margin: 0 15px;
  @media ${BREAK_POINT.tablet_and_down} {
    flex-basis: 100%;
  }
`;

export const SideContainer = styled.div`
  flex-grow: 1;
  width: 0px;
  margin: 0 15px;
  @media ${BREAK_POINT.tablet_and_down} {
    margin-top: 30px;
  }
`;

export const ImgCardContainer = styled.div`
  background-image: url(${props => props.src});
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  position: relative;
`;

export const CardFooter = styled(Div)`
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0px 15px;
  height: 200px;
  overflow: hidden;
  transition: background-color 1s, height 0.5s;
  position: absolute;
  :hover {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const InsImgContainer = styled(Div)`
  flex-basis: calc(50% - 20px);
  padding: 10px;
  width: 0px;
`;

export const InsImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 15vw;
  max-height: 200px;
  @media ${BREAK_POINT.tablet_and_down} {
    height: 50vw;
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  font-size: 15px;
  color: ${APP_COLOR.DARK};
  border: 1px solid ${APP_COLOR.LIGHT};
  margin-bottom: 15px; 
`;
