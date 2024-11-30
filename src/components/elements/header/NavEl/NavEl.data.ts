import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'nav',
  position: 'relative',
  display: 'flex',
  flexDirection: {
    xl: 'row',
    lg: 'column',
    md: 'column',
    sm: 'column',
    xs: 'column'
  },
  justifyContent: {
    xl: 'end',
    lg: 'start',
    md: 'start',
    sm: 'start',
    xs: 'start'
  },
  alignItems: {
    xl: 'center'
  },
  bgColor: {
    lg: 'var(--black)',
    md: 'var(--black)',
    sm: 'var(--black)',
    xs: 'var(--black)'
  },
  styles: {
    xl: 'grid-column: 1/2; grid-row: 1/2;',
    lg: 'grid-column: 2/3; grid-row: 3/4;',
    md: 'grid-column: 2/3; grid-row: 3/4;',
    sm: 'grid-column: 2/3; grid-row: 3/4;',
    xs: 'grid-column: 2/3; grid-row: 3/4;'
  }
}

const commonItemData: TCommonData = {
  variant: 'tertiary',
  margin: {
    lg: '0 20px',
    md: '0 20px',
    sm: '0 20px',
    xs: '0 20px'
  },
  marginBottom: {
    lg: '10px',
    md: '10px',
    sm: '5px',
    xs: '5px'
  },
  marginLeft: {
    xl: '22.3px',
  },
  paddingBottom: {
    lg: '10px',
    md: '10px',
    sm: '5px',
    xs: '5px'
  },
  borderBottom: {
    lg: '1px solid var(--bluish-black)',
    md: '1px solid var(--bluish-black)',
    sm: '1px solid var(--bluish-black)',
    xs: '1px solid var(--bluish-black)'
  },
  classes: {
    xl: 'reg-16',
    lg: 'reg-14',
    md: 'reg-14',
    sm: 'reg-14',
    xs: 'reg-14'
  }
}

const privateItemData: TTags[] = [
  {
    tags: 'a',
    to: 'company',
    title: 'О Компании'
  },
  {
    tags: 'a',
    to: 'delivery_payment',
    title: 'Доставка и Оплата'
  },
  {
    tags: 'a',
    to: 'contacts',
    title: 'Контакты'
  }
]

const itemData = useData(commonItemData, privateItemData);

export { blockData, itemData }