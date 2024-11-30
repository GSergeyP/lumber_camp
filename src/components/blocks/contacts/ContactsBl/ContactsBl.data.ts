import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'article',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  margin: '0 auto',
  width: {
    xl: '1201px',
    lg: '936px',
    md: '696px',
    sm: '416px',
    xs: '272px'
  },
  height: {
    xl: '1740px',
    lg: '1730px',
    md: '1850px'
  },
  styles: {
    sm: 'min-height: 1445px',
    xs: 'min-height: 1515px'
  }
}

const itemData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: 'column',
  marginTop: {
    xl: '80px',
    lg: '70px',
    md: '74px',
    sm: '65px',
    xs: '65px'
  },
  marginBottom: {
    sm: '60px',
    xs: '60px'
  },
}

export { blockData, itemData }