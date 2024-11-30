import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: 'column',
  marginTop: {
    xl: '40px',
    lg: '30px',
    md: '42px'
  },
  borderRight: {
    xl: '2px solid var(--gray)',
    lg: '2px solid var(--gray)'
  },
  height: {
    xl: '155px',
    lg: '154px',
  },
  styles: {
    xl: 'grid-column: 1/2; grid-row: 1/2;',
    lg: 'grid-column: 1/2; grid-row: 1/2;',
    md: 'grid-column: 1/4; grid-row: 1/2; place-items: center;',
    sm: 'grid-column: 1/2; grid-row: 1/2; place-items: center;',
    xs: 'grid-column: 1/2; grid-row: 1/2; place-items: center;'
  }
}

const itemData: TTags[] = [
  {
    tags: 'img',
    src: 'common/logo_white_headerBl.png',
    alt: 'Лесозаготовка',
    marginTop: {
      sm: '24px',
      xs: '25px'
    },
    marginLeft: {
      xl: '120px',
      lg: '50px'
    },
    width: '40px',
    height: '40px'
  },
  {
    tags: 'p',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    marginTop: {
      xl: '10px',
      lg: '10px',
      md: '12px',
      sm: '14px',
      xs: '14px'
    },
    marginLeft: {
      xl: '120px',
      lg: '50px'
    },
    width: '262px',
    color: 'var(--white)',
    styles: 'text-align: center;',
    classes: 'reg-14'
  }
]

export { blockData, itemData }