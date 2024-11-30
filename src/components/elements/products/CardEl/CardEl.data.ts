import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  display: 'grid',
  margin: '100px 0',
  styles: {
    xl: 'grid-template-columns: repeat(4, 264px); gap: 50px; place-content: center;',
    lg: 'grid-template-columns: repeat(4, 216px); gap: clamp(0.875rem, -3.98rem + 7.895vw, 3.125rem); place-content: center;',
    md: 'grid-template-columns: repeat(3, 216px); gap: 14px; place-content: center;',
    sm: 'grid-template-columns: repeat(3, 128px); gap: clamp(0.875rem, -2.713rem + 12.371vw, 3.125rem); place-content: center;',
    xs: 'grid-template-columns: repeat(2, 128px); gap: 14px; place-content: center;'
  }
}

const cardData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: {
    xl: '264px',
    lg: '216px',
    md: '216px',
    sm: '128px',
    xs: '128px'
  },
  height: {
    xl: '393px',
    lg: '347px',
    md: '347px',
    sm: '242px',
    xs: '242px'
  },
  borderRadius: '10px',
  styles: 'box-shadow: 2px 2px 15px var(--black-10);'
}

const imgData: TTags = {
  tags: 'img',
  src: '',
  alt: '',
  margin: '0 auto',
  width: {
    xl: '198px',
    lg: '158px',
    md: '158px',
    sm: '100px',
    xs: '100px'
  },
  height: 'auto',
}

const h4Data: TTags = {
  tags: 'h4',
  marginTop: {
    xl: '70px',
    lg: '50px',
    md: '50px',
    sm: '25px',
    xs: '25px'
  },
  marginLeft: '10px',
  classes: {
    xl: 'lig-16',
    lg: 'lig-14',
    md: 'lig-14',
    sm: 'lig-11',
    xs: 'lig-11'
  }
}

const pData: TTags = {
  tags: 'p',
  marginTop: '10px',
  marginLeft: '10px',
  width: {
    xl: '240px',
    lg: '210px',
    md: '210px',
    sm: '90px',
    xs: '90px'
  },
  classes: {
    xl: 'reg-18',
    lg: 'reg-16',
    md: 'reg-16',
    sm: 'reg-14',
    xs: 'reg-14'
  }
}

export { blockData, cardData, imgData, h4Data, pData }