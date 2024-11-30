import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  bgColor: 'var(--black)',
  styles: {
    lg: 'grid-column: 2/3; grid-row: 2/3;',
    md: 'grid-column: 2/3; grid-row: 2/3;',
    sm: 'grid-column: 2/3; grid-row: 2/3;',
    xs: 'grid-column: 2/3; grid-row: 2/3;'
  }
}

const commonItemData: TCommonData = {
  width: '40%',
  classes: 'reg-14'
}

const privateItemData: TTags[] = [
  {
    tags: 'button',
    variant: 'primary',
    classesActive: true,
    title: 'КАТАЛОГ',
    click: true
  },
  {
    tags: 'button',
    variant: 'primary',
    classesActive: false,
    title: 'РАЗДЕЛЫ',
    click: true
  }
]

const itemData = useData(commonItemData, privateItemData)

export { blockData, itemData }