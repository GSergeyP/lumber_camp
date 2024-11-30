import type { TTags } from '@modifiers/TagsMo.type';

const baseURL = import.meta.env.VITE_BASE_IMG_URL

const blockData: TTags = {
  tags: 'article',
  position: 'absolute',
  top: '0',
  left: '50%',
  width: {
    xl: '1440px',
    lg: '100%',
    md: '100%',
    sm: '100%',
    xs: '100%'
  },
  height: {
    xl: '880px',
    lg: '777px',
    md: '997px',
    sm: '975px',
    xs: '1078px'
  },
  styles: 'transform: translateX(-50%);'
}

const topItemData: TTags = {
  tags: 'div',
  width: '100%',
  height: {
    xl: '650px',
    lg: '650px',
    md: '650px',
    sm: '650px',
    xs: '525px'
  },
  bg: {
    xl: `linear-gradient(129deg, var(--black) calc(57% + 1px), var(--black) 58%, transparent calc(58% + 1px)), url("${baseURL}common/bg_home_bannerBl.png") no-repeat left top`,
    lg: `linear-gradient(125deg, var(--black) calc(66% + 1px), var(--black) 67%, transparent calc(67% + 1px)), url("${baseURL}common/bg_home_bannerBl.png") no-repeat 50% 50%`,
    md: `linear-gradient(117deg, var(--black) calc(65% + 1px), var(--black) 66%, transparent calc(66% + 1px)), url("${baseURL}common/bg_home_bannerBl.png") no-repeat 50% 50%`,
    sm: `linear-gradient(108deg, var(--black) calc(67% + 1px), var(--black) 68%, transparent calc(68% + 1px)), url("${baseURL}common/bg_home_bannerBl.png") no-repeat 60% 86%`,
    xs: `linear-gradient(106deg, var(--black) calc(67% + 1px), var(--black) 68%, transparent calc(68% + 1px)), url("${baseURL}common/bg_home_bannerBl.png") no-repeat 60% 86%`
  }
}

const bottomItemData:TTags = {
  tags: 'div',
  width: '100%',
  height:  {
    xl: '230px',
    lg: '127px',
    md: '347px',
    sm: '325px',
    xs: '553px'
  },
}

export { blockData, topItemData, bottomItemData }