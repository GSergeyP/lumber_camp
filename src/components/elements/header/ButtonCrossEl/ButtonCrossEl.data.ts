import type { TTags } from '@modifiers/TagsMo.type';

const data: TTags = {
  tags: 'button',
  variant: 'tertiary',
  click: true,
  marginLeft: {
    lg: '6px',
    md: '6px',
    sm: '6px',
    xs: '6px'
  },
  width: '46px',
  height: 'auto',
  styles: {
    lg: 'grid-column: 1/2; grid-row: 1/2;',
    md: 'grid-column: 1/2; grid-row: 1/2;',
    sm: 'grid-column: 1/2; grid-row: 1/2;',
    xs: 'grid-column: 1/2; grid-row: 1/2;'
  },
  icon: {
    title: 'Cross',
    width: '45px',
    height: 'auto',
    classes: 'label-icon'
  }
}

export { data }