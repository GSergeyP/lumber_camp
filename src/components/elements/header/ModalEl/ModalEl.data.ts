import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  position: 'absolute',
  top: '45px',
  left: {
    xl: '15px'
  },
  margin: {
    lg: '0 auto;',
    md: '0 auto;',
    sm: '0 auto;',
    xs: '0 auto'
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingTop: '15px',
  width: {
    xl: '190px',
    lg: '220px',
    md: '220px',
    sm: '220px',
    xs: '220px'
  },
  height: 'fit-content',
  bgColor: 'var(--white)',
  styles: {
    xl: 'z-index: 5; box-shadow: 2px 2px 15px var(--black-10);',
    lg: 'z-index: 5; box-shadow: 2px 2px 15px var(--gray);',
    md: 'z-index: 5; box-shadow: 2px 2px 15px var(--gray);',
    sm: 'z-index: 5; box-shadow: 2px 2px 15px var(--gray);',
    xs: 'z-index: 5; box-shadow: 2px 2px 15px var(--gray);'
  }
}

const itemData: TTags = {
  tags: 'button',
  marginBottom: '15px',
  marginLeft: '15px',
  classes: 'reg-16'
}

export { blockData, itemData }