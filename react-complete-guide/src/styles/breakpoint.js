const SIZE = {
  xs: '375px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

const BREAK_POINT = {
  xs_and_down: `(max-width: ${SIZE.xs})`,
  sm_and_down: `(max-width: ${SIZE.sm})`,
  md_and_down: `(max-width: ${SIZE.md})`,
  lg_and_down: `(max-width: ${SIZE.lg})`,
  xl_and_down: `(max-width: ${SIZE.xl})`,
};

export default BREAK_POINT;
