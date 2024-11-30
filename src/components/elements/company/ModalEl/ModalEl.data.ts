import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  position: 'absolute',
  top: {
    xl: '-50%',
    lg: '-50%',
    md: '-50%',
    sm: '40%',
    xs: '70%'
  },
  left: {
    xl: '50%',
    lg: '50%',
    md: '50%',
    sm: '50%',
    xs: '50%'
  },
  styles: 'transform: translate(-50%, 50%); z-index: 15;'
}

const itemData: TTags[] = [
  {
    tags: 'img',
    src: 'company/cert.png',
    alt: 'Сертификат',
    width: {
      xl: '490px',
      lg: '490px',
      md: '490px',
      sm: '416px',
      xs: '272px'
    },
    height: {
      xl: '701px',
      lg: '701px',
      md: '701px',
      sm: '595px',
      xs: '389px'
    }
  },
  {
    tags: 'button',
    variant: 'sixfold',
    click: true,
    position: 'absolute',
    top: {
      sm: '-40px',
      xs: '-40px'
    },
    right: {
      sm: '0',
      xs: '0'
    },
    icon: {
      title: 'Cross',
      width: '40px',
      height: '40px',
      classes: 'label-icon'
    }
  }
]

export { blockData, itemData }