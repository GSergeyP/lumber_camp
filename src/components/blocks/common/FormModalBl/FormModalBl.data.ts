import type { TTags } from '@modifiers/TagsMo.type';

const baseURL = import.meta.env.VITE_BASE_IMG_URL 

const blockData: TTags = {
  tags: 'article',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  bgColor: 'var(--black-50)',
  styles: 'z-index: 5'
}

const itemData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgImage: `url("${baseURL}common/bg_form_modalBl.png")`,
  borderRadius: '10px',
  width: {
    xl: '690px',
    lg: '690px',
    md: '690px',
    sm: '416px',
    xs: '272px'
  },
  height: {
    xl: '555px',
    lg: '555px',
    md: '555px',
    sm: '555px',
    xs: '450px'
  },
}

export { blockData, itemData }