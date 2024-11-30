import type { TTags } from '@modifiers/TagsMo.type';

const data: TTags = {
  tags: 'button',
  variant: 'fivefold',
  position: {
    xl: 'absolute',
    lg: 'absolute',
    md: 'absolute',
    sm: 'relative',
    xs: 'relative'
  },
  top: {
    xl: '205px',
    lg: '175px',
    md: '205px',
    sm: '-185px',
    xs: '-175px'
  },
  right: {
    xl: '85px',
    lg: '70px',
    md: '80px'
  },
  margin: {
    sm: '0 auto',
    xs: '0 auto'
  },
  width: '40px',
  height: '40px',
  click: true,
  icon: {
    title: 'Loupe',
    paddingTop: '3px',
    width: '14px',
    height: '14px',
    classes: 'label-icon'
  }
}

export { data }