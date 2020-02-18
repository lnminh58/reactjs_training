import styled from 'styled-components';
import { APP_COLOR, BREAK_POINT } from '@/styles';

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
  flex-basis: 65%;
  margin: 0 15px;
  @media ${BREAK_POINT.tablet_and_down} {
    flex-basis: 100%;
  }
`;

export const SideContainer = styled.div`
  flex-grow: 1;
  margin: 0 15px;
`;
