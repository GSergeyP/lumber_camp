import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'nav',
  display: 'flex',
  flexDirection: 'column',
  marginTop: {
    xl: '40px',
    lg: '30px',
  },
  borderRight: {
    xl: '2px solid var(--gray)',
    lg: '2px solid var(--gray)',
    md: '2px solid var(--gray)'
  },
  height: {
    xl: '155px',
    lg: '154px'
  },
  styles: {
    xl: 'grid-column: 3/4; grid-row: 1/2;',
    lg: 'grid-column: 3/4; grid-row: 1/2;',
    md: 'grid-column: 2/3; grid-row: 2/3;',
    sm: 'grid-column: 1/2; grid-row: 3/4; place-items: center;',
    xs: 'grid-column: 1/2; grid-row: 3/4; place-items: center;'
  }
}

const commonItemData: TCommonData = {
  variant: 'primary',
  marginBottom: '9px',
  marginLeft: {
    xl: '40px',
    lg: '19.5%',
    md: '19.5%',
  },
  classes: 'reg-14'
}

const privateItemData: TTags[] = [
  {
    tags: 'h4',
    variant: '',
    title: 'ИНФОРМАЦИЯ',
    marginBottom: '14px',
    color: 'var(--white)',
    classes: 'med-14'
  },
  {
    tags: 'a',
    to: 'company',
    title: 'О Компании',
  },
  {
    tags: 'a',
    to: 'delivery_payment',
    title: 'Доставка и Оплата',
  },
  {
    tags: 'a',
    to: 'contacts',
    title: 'Контакты',
  }
]

const itemData = useData(commonItemData, privateItemData)


export { blockData, itemData }