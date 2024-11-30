import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'hgroup',
  display: 'flex',
  flexDirection: 'column',
  marginTop: {
    xl: '40px',
    lg: '30px'
  },
  height: {
    xl: '155px',
    lg: '154px'
  },
  styles: {
    xl: 'grid-column: 4/5; grid-row: 1/2;',
    lg: 'grid-column: 4/5; grid-row: 1/2;',
    md: 'grid-column: 3/4; grid-row: 2/3;',
    sm: 'grid-column: 1/2; grid-row: 4/5; place-items: center;',
    xs: 'grid-column: 1/2; grid-row: 4/5; place-items: center;'
  }
}

const commonItemData: TCommonData = {
  marginBottom: '9px',
  marginLeft: {
    xl: '40px',
    lg: '17%',
    md: '13%'
  },
  color: 'var(--white)',
  classes: 'reg-14'
}

const privateItemData: TTags[] = [
  {
    tags: 'h4',
    title: 'КОНТАКТЫ',
    marginBottom: '14px',
    classes: 'med-14'
  },
  {
    tags: 'p',
    title: 'info@form.com'
  },
  {
    tags: 'p',
    title: '882-587-3025',
  },
  {
    tags: 'p',
    title: '6116 Willa River Suite 610',
  }
]

const itemData = useData(commonItemData, privateItemData)

export { blockData, itemData }