import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'div',
  marginTop: {
    xl: '72px',
    lg: '74px',
    md: '74px',
    sm: '74px',
    xs: '32px'
  },
  width: '100%',
  height: 'max-content',
  styles: {
    xl: 'grid-column: 2/3; grid-row: 1/2; text-align: right;',
    lg: 'grid-column: 2/3; grid-row: 1/2; text-align: right;',
    md: 'grid-column: 2/3; grid-row: 1/2; text-align: right;',
    sm: 'grid-column: 2/3; grid-row: 1/2; text-align: right;'
  },
}

const commonItemData: TCommonData = {
  variant: 'quaternary',
  width: '40px',
  height: '40px'
}

const privateItemData: TTags[] = [
  {
    tags: 'button',
    click: 'prev',
    marginRight: '10px',
    icon: {
      title: 'Jackdaw'
    }
  },
  {
    tags: 'button',
    click: 'new',
    icon: {
      title: 'Jackdaw',
      styles: 'transform: rotate(180deg);'
    }
  },
]

const itemData = useData(commonItemData, privateItemData)

export { blockData, itemData }