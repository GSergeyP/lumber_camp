import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'div',
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
    lg: 'end',
    md: 'end',
    sm: 'end',
    xs: 'end'
  },
  bgColor: {
    lg: 'var(--black)',
    md: 'var(--black)',
    sm: 'var(--black)',
    xs: 'var(--black)'
  },
  styles: {
    xl: 'grid-column: 3/5; grid-row: 1/2;  place-items: center;',
    lg: 'grid-column: 2/3; grid-row: 4/5;',
    md: 'grid-column: 2/3; grid-row: 4/5;',
    sm: 'grid-column: 2/3; grid-row: 4/5;',
    xs: 'grid-column: 2/3; grid-row: 4/5;'
  }
}

const commonItemData: TCommonData = {
  variant: 'primary',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: {
    xl: 'center'
  },
  alignItems: {
    xl: 'center'
  },
  marginRight: {
    xl: '15.5px'
  },
  margin: {
    lg: '0 20px',
    md: '0 20px',
    sm: '0 20px',
    xs: '0 20px'
  },
  paddingBottom: {
    lg: '10px',
    md: '10px',
    sm: '5px',
    xs: '5px'
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
    tags: 'button',
    title: 'Пн-Вс 9:00 - 19:00',
    icon: {
      title: 'Clock',
      marginRight: {
        xl: '10.1px',
        lg: '10.1px',
        md: '10.1px',
        sm: '10.1px',
        xs: '10.1px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'button',
    title: '+7 800 888 88 88',
    icon: {
      title: 'Phone',
      marginRight: {
        xl: '10.1px',
        lg: '10.1px',
        md: '10.1px',
        sm: '10.1px',
        xs: '10.1px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'button',
    click: 'declare',
    title: 'ОСТАВИТЬ ЗАЯВКУ',
    variant: 'secondary',
    marginLeft: {
      xl: '130px'
    },
    width: '143px',
    height: '42px',
    classes: 'reg-14'
  }
]

const itemData = useData(commonItemData, privateItemData);

export { blockData, itemData }