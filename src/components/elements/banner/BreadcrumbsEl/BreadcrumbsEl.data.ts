import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  styles: 'text-transform: uppercase;',
  classes: 'med-24'
}

const spanData: TTags = {
  tags: 'span',
  display: 'flex',
  title: 'ВЕРНУТЬСЯ НА',
  classes: 'reg-14'
}

const aData: TTags = {
  tags: 'a',
  to: 'home',
  variant: 'quaternary', 
  marginLeft: '4px',
  styles: 'order: 2',
  classes: 'reg-14'
}

export { blockData, spanData, aData }
