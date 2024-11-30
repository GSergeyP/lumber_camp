import type { TTags } from '@modifiers/TagsMo.type';

const data: TTags = {
  tags: 'h3',
  title: 'Наша продукция',
  display: 'flex',
  alignItems: 'center',
  marginTop: '70px',
  width: '100%',
  height: {
    xl: '43px',
    lg: '43px',
    md: '43px',
    sm: '40px',
    xs: '40px'
  },
  color: 'var(--black)',
  styles: {
    xl: 'grid-column: 1/2; grid-row: 1/2;',
    lg: 'grid-column: 1/2; grid-row: 1/2;',
    md: 'grid-column: 1/2; grid-row: 1/2;',
    sm: 'grid-column: 1/2; grid-row: 1/2;'
  },
  classes: {
    xl: 'reg-30',
    lg: 'reg-30',
    md: 'reg-30',
    sm: 'reg-24',
    xs: 'reg-24'
  },
  icon: {
    title: 'Symbol',
    marginRight: {
      xl: '7px',
      lg: '8px',
      md: '8px',
      sm: '8px',
      xs: '4px'
    },
    styles: 'cursor: default;'
  }
}

export { data }