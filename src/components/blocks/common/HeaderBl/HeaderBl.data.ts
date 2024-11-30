import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'header',
  position: 'relative',
  margin: {
    xl: '0 auto'
  },
  width: {
    xl: '1440px',
    lg: '100%',
    md: '100%',
    sm: '100%',
    xs: '100%'
  },
  styles: 'z-index: 5;'
}

const itemTopData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  width: {
    xl: '1200px',
    lg: '95%',
    md: '94%',
    sm: '90%',
    xs: '89%'
  },
  height: '80px'
}

const itemBottomData: TTags = {
  tags: 'div',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'grid',
  margin: '0 auto',
  width: {
    lg: '464px',
    md: '464px',
    sm: '464px',
    xs: '100%'
  },
  styles: {
    xl: 'grid-template-columns: 538px 170px 397px 335px; grid-template-rows: 80px 51px;',
    lg: 'grid-template-columns: 50px 414px; grid-template-rows: 50px calc(20vh - 50px) 45vh 35vh;',
    md: 'grid-template-columns: 50px 414px; grid-template-rows: 50px calc(20vh - 50px) 45vh 35vh;',
    sm: 'grid-template-columns: 50px 414px; grid-template-rows: 50px calc(20vh - 50px) 45vh 35vh;',
    xs: 'grid-template-columns: 50px calc(99% - 50px); grid-template-rows: 50px calc(20vh - 50px) 45vh 35vh;'
  },
  bgColor: {
    lg: 'var(--gray)',
    md: 'var(--gray)',
    sm: 'var(--gray)',
    xs: 'var(--gray)'
  }
}

export { blockData, itemTopData, itemBottomData }