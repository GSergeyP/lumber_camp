import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  justifyContent: {
    lg: 'center',
    md: 'center',
    sm: 'center',
    xs: 'center'
  },
  alignItems: 'center',
  bgColor: 'var(--black)',
  styles: {
    xl: 'grid-column: 4/5; grid-row: 2/3;',
    lg: 'grid-column: 2/3; grid-row: 1/2;',
    md: 'grid-column: 2/3; grid-row: 1/2;',
    sm: 'grid-column: 2/3; grid-row: 1/2;',
    xs: 'grid-column: 2/3; grid-row: 1/2;'
  }
}

const itemData: TTags = {
  tags: 'form',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: {
    lg: '1px solid var(--white)',
    md: '1px solid var(--white)',
    sm: '1px solid var(--white)',
    xs: '1px solid var(--white)'
  },
  borderRadius: {
    xl: '16px',
    lg: '4px',
    md: '4px',
    sm: '4px',
    xs: '4px'
  },
  width: {
    xl: '216px',
    lg: '230px',
    md: '230px',
    sm: '230px',
    xs: '230px'
  },
  height: {
    xl: '32px',
    lg: '40px',
    md: '40px',
    sm: '40px',
    xs: '40px'
  },
  bgColor: {
    xl: 'var(--white)'
  }
}

const inputData: TTags[] = [
  {
    tags: 'input',
    type: 'text',
    id: 'input_search',
    required: true,
    input: true,
    placeholder: 'Поиск...',
    width: {
      xl: '170px'
    },
    height: {
      xl: '16px'
    },
    color: {
      xl: 'var(--black)',
      lg: 'var(--white)',
      md: 'var(--white)',
      sm: 'var(--white)',
      xs: 'var(--white)'
    },
    bgColor: {
      lg: 'var(--black)',
      md: 'var(--black)',
      sm: 'var(--black)',
      xs: 'var(--black)'
    },
    styles: 'opacity: 0.3;',
    classes: 'reg-14',
    label: {
      marginLeft: {
        xl: '8px'
      }
    },
  },
  {
    tags: 'inputButton',
    type: 'submit',
    id: 'submit_search',
    value: ' ',
    label: {
      marginRight: {
        xl: '8px'
      },
      icon: {
        title: 'Loupe',
        marginTop: '3px',
        width: '15px',
        height: '15px',
        styles: {
          xl: 'fill: var(--black); opacity: 0.3;',
          lg: 'fill: var(--white); opacity: 0.3;',
          md: 'fill: var(--white); opacity: 0.3;',
          sm: 'fill: var(--white); opacity: 0.3;',
          xs: 'fill: var(--white); opacity: 0.3;'
        }
      }
    }
  }
]

export { blockData, itemData, inputData }