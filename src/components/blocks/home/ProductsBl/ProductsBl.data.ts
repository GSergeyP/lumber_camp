import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'article',
  position: 'relative',
  display: {
    xl: 'grid',
    lg: 'grid',
    md: 'grid',
    sm: 'grid',
    xs: 'flex'
  },
  flexDirection: {
    xs: 'column'
  },

  margin: '0 auto',
  width: {
    xl: '1201px',
    lg: '936px',
    md: '690px',
    sm: '416px',
    xs: '280px'
  },
  height: {
    xl: '605px',
    lg: '560px',
    md: '560px',
    sm: '452px',
    xs: '522px'
  }
}

const itemData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  styles: {
    xl: 'grid-column: 1/3; grid-row: 2/3;',
    lg: 'grid-column: 1/3; grid-row: 2/3;',
    md: 'grid-column: 1/3; grid-row: 2/3;',
    sm: 'grid-column: 1/3; grid-row: 2/3;'
  }
}

export { blockData, itemData }