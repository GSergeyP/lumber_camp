import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'hgroup',
  position: 'absolute',
  top: {
    xl: '162px',
    lg: '162px',
    md: '162px',
    sm: '224px',
    xs: '180px'
  },
  left: {
    xl: '120px',
    lg: '26px',
    md: '24px',
  },
  display: 'flex',
  flexDirection: 'column',
  width: {
    sm: '100%',
    xs: '100%'
  },
  styles: {
    sm: 'text-align: center;',
    xs: 'text-align: center;'
  }
}

const itemData: TTags[] = [
  {
    tags: 'h3',
    title: 'НАША КОМПАНИЯ ЗАНИМАЕТСЯ',
    color: 'var(--white)',
    classes: {
      xl: 'reg-24',
      lg: 'reg-22',
      md: 'reg-22',
      sm: 'reg-22',
      xs: 'reg-14'
    }
  },
  {
    tags: 'h1',
    title: 'ЛЕСОЗАГОТОВКОЙ',
    marginTop: '9px',
    color: 'var(--white)',
    classes: {
      xl: 'bold-64',
      lg: 'bold-55',
      md: 'bold-55',
      sm: 'bold-43',
      xs: 'bold-28'
    }
  },
  {
    tags: 'p',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    width: {
      xl: '632px',
      lg: '481px',
      md: '463px',
      sm: '359px',
      xs: '272px'
    },
    margin: {
      sm: '0 auto',
      xs: '0 auto'
    },
    marginTop: {
      xl: '9px',
      lg: '2px',
      md: '2px',
      xs: '4px'
    },
    color: 'var(--white)',
    classes: {
      xl: 'reg-18',
      lg: 'reg-14',
      md: 'reg-14',
      sm: 'reg-14',
      xs: 'reg-11'
    }
  }
]

export { blockData, itemData }