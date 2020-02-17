const SIZE = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1600px',
  desktop: '1980px',
  desktopL: '2560px'
};

const BREAK_POINT = {
  mobileS_and_down: `(max-width: ${SIZE.mobileS})`,
  mobileM_and_down: `(max-width: ${SIZE.mobileM})`,
  mobileL_and_down: `(max-width: ${SIZE.mobileL})`,
  tablet_and_down: `(max-width: ${SIZE.tablet})`,
  laptop_and_down: `(max-width: ${SIZE.laptop})`,
  laptopL_and_down: `(max-width: ${SIZE.laptopL})`,
  desktop_and_down: `(max-width: ${SIZE.desktop})`,
  desktopL_and_down: `(max-width: ${SIZE.desktopL})`
};

export default BREAK_POINT
