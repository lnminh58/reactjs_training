import { createMuiTheme } from '@material-ui/core/styles';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#e33371',
      main: '#ff6f5e',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#40bfc1',
      dark: '#ba000d',
      contrastText: '#000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#fff'
    }
  }
});
