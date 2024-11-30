import type { TTags } from '@modifiers/TagsMo.type';

const baseURL = import.meta.env.VITE_BASE_IMG_URL

const data: TTags = {
  tags: 'article',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: {
    xl: '51px auto 0 auto',
    lg: '-10px auto 0 auto',
    md: '-14px auto 0 auto',
    sm: '-14px auto 0 auto',
    xs: '-14px auto 0 auto'
  },
  width: {
    xl: '1440px',
    lg: '100%',
    md: '100%',
    sm: '100%',
    xs: '100%'
  },
  height: {
    xl: '190px',
    lg: '201px',
    md: '201px',
    sm: '201px',
    xs: '201px'
  },
  borderTop: '1px solid var(--platinum)',
  borderBottom: {
    xl: '1px solid var(--platinum)'
  },
  bg: `url("${baseURL}common/bg_bannerBl.png") no-repeat 50% 50%`
}

export { data }