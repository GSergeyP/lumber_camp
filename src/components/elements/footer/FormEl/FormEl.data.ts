import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'form',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  marginTop: {
    xl: '40px',
    lg: '37px'
  },
  height: {
    xl: '155px'
  },
  styles: {
    xl: 'grid-column: 5/6; grid-row: 1/2;',
    lg: 'grid-column: 1/5; grid-row: 2/3; place-items: center;',
    md: 'grid-column: 1/4; grid-row: 3/4; place-items: center;',
    sm: 'grid-column: 1/2; grid-row: 5/6; place-items: center;',
    xs: 'grid-column: 1/2; grid-row: 5/6; place-items: center;'
  }
}

const itemData: TTags[] = [
  {
    tags: 'h4',
    title: 'ПОДПИСАТЬСЯ НА НОВОСТИ',
    marginTop: {
      md: '40px'
    },
    marginBottom: '15px',
    marginLeft: {
      xl: '20px'
    },
    color: 'var(--white)',
    classes: 'med-14'
  },
  {
    tags: 'input',
    type: 'email',
    id: 'input_send_email',
    variant: 'primary',
    placeholder: 'Email',
    required: true,
    marginTop: {
      xl: '12px',
      lg: '12px',
      md: '8px',
      sm: '8px',
      xs: '8px'
    },
    width: '112px',
    height: '39px',
    styles: {
      lg: 'text-align: left',
      md: 'text-align: left',
      sm: 'text-align: left',
      xs: 'text-align: left'
    },
    classes: 'label-email',
    label: {
      title: 'Duis autem vel eum',
      display: 'flex',
      flexDirection: 'column-reverse',
      marginLeft: {
        xl: '20px',
      },
      marginRight: {
        lg: '78px',
        md: '86px',
        sm: '86px',
        xs: '86px'
      },
      width: {
        lg: '190px',
        md: '190px',
        sm: '190px',
        xs: '190px'
      },
      color: 'var(--white)',
      styles: {
        lg: 'text-align: right;',
        md: 'text-align: right;',
        sm: 'text-align: right;',
        xs: 'text-align: right;'
      },
      classes: 'reg-14'
    }
  },
  {
    tags: 'inputButton',
    type: 'submit',
    id: 'submit_send_email',
    variant: 'primary',
    value: 'ОСТАВИТЬ ЗАЯВКУ',
    position: 'relative',
    top:  '-40px',
    left: {
      xl: '130px',
      lg: '64px',
      md: '59px',
      sm: '59px',
      xs: '59px'
    },
    width: '173px',
    height: '41px',
    classes: 'reg-14'
  }
]

export { blockData, itemData }