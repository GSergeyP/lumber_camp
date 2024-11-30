import type { TTags } from '@modifiers/TagsMo.type';

const baseURL = import.meta.env.VITE_BASE_IMG_URL

const data: TTags = {
  tags: 'article',
  position: 'relative',
  margin: {
    xl: '802px auto 0 auto',
  },
  marginTop: {
    lg: '769px',
    md: '972px',
    sm: '967px',
    xs: '1070px'
  },
  width: {
    xl: '1440px',
    lg: '100%',
    md: '100%',
    sm: '100%',
    xs: '100%'
  },
  height: '522px',
  bg: {
    xl: `linear-gradient(90deg, var(--black) calc(46% + 1px), var(--black) 47%, transparent calc(47% + 1px)), url("${baseURL}common/bg_home_AboutCompanyBl.png") no-repeat left top`,
    lg: `linear-gradient(90deg, var(--black) calc(49% + 1px), var(--black) 50%, transparent calc(50% + 1px)), url("${baseURL}common/bg_home_AboutCompanyBl.png") no-repeat 50% 50%`,
    md: `linear-gradient(90deg, var(--black) calc(64% + 1px), var(--black) 65%, transparent calc(65% + 1px)), url("${baseURL}common/bg_home_AboutCompanyBl.png") no-repeat 50% 50%`,
    sm: `linear-gradient(90deg, var(--black) calc(68% + 1px), var(--black) 69%, transparent calc(69% + 1px)), url("${baseURL}common/bg_home_AboutCompanyBl.png") no-repeat 50% 50%`,
    xs: `linear-gradient(90deg, var(--black) calc(68% + 1px), var(--black) 69%, transparent calc(69% + 1px)), url("${baseURL}common/bg_home_AboutCompanyBl.png") no-repeat 50% 50%`
  }
}

export { data }