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
    xl: 'start',
    lg: 'start',
    md: 'start',
    sm: 'start',
    xs: 'start'
  },
  alignItems: {
    xl: 'center'
  },
  paddingLeft: {
    xl: '100px'
  },
  bgColor: 'var(--black)',
  styles: {
    xl: 'grid-column: 1/4; grid-row: 2/3;',
    lg: 'grid-column: 2/3; grid-row: 3/4;',
    md: 'grid-column: 2/3; grid-row: 3/4;',
    sm: 'grid-column: 2/3; grid-row: 3/4;',
    xs: 'grid-column: 2/3; grid-row: 3/4;'
  }
}

const commonItemData: TCommonData = {
  variant: 'primary',
  margin: '0 20px',
  marginBottom: {
    lg: '10px',
    md: '10px',
    sm: '5px',
    xs: '5px'
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
    to: 'products',
    title: 'Пиловочник',
    params: {
      product: 'sawmill'
    }
  },
  {
    tags: 'a',
    to: 'products',
    title: 'Уголь',
    params: {
      product: 'coal'
    }
  },
  {
    tags: 'a',
    to: 'products',
    title: 'Пиломатериалы',
    params: {
      product: 'lumber'
    }
  },
  {
    tags: 'a',
    to: 'products',
    title: 'Европоддоны',
    params: {
      product: 'pallet'
    }
  },
  {
    tags: 'a',
    to: 'products',
    title: 'Тех. Дрова',
    params: {
      product: 'wood'
    }
  }
]

const itemData = useData(commonItemData, privateItemData);

export { blockData, itemData }