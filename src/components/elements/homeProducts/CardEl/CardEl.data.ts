import type { TTags } from '@modifiers/TagsMo.type';

const cardData: TTags = {
  tags: 'div',
  variant: 'secondary',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  top: {
    xl: '-20px',
    lg: '-20px',
    md: '-20px',
    sm: '-20px',
    xs: '30px'
  },
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
  classesActive: false
}
const headerCardData: TTags = {
  tags: 'div',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  classes: 'label-header'
}

const imgData: TTags = {
  tags: 'img',
  src: '',
  alt: '',
  width: {
    xl: '198px',
    lg: '168px',
    md: '168px',
    sm: '65px',
    xs: '65px'
  },
  height: 'auto'
}

const h4Data: TTags = {
  tags: 'h4',
  title: '',
  marginTop: {
    xl: '15px',
    lg: '10px'
  },
  classes: {
    xl: 'lig-16 label-text-h',
    lg: 'lig-14 label-text-h',
    md: 'lig-14 label-text-h',
    sm: 'lig-11 label-text-h',
    xs: 'lig-11 label-text-h'
  }
}

const pData: TTags = {
  tags: 'p',
  title: '',
  marginTop: {
    xl: '10px',
    lg: '10px'
  },
  classes: {
    xl: 'reg-18 label-text-p',
    lg: 'reg-16 label-text-p',
    md: 'reg-16 label-text-p',
    sm: 'reg-14 label-text-p',
    xs: 'reg-14 label-text-p'
  }
}

const aData: TTags = {
  tags: 'a',
  to: 'products',
  variant: 'secondary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0 20px 10px',
  width: {
    xl: '145px',
    lg: '145px',
    md: '145px',
    sm: '105px',
    xs: '105px'
  },
  height: '40px',
  classes: 'med-12 label-a'
}

const baseData: Record<string, any> = { 
                                        card: cardData, 
                                        header: headerCardData, 
                                        img: imgData, 
                                        h4: h4Data, 
                                        p: pData,
                                        a: {...aData, title: 'УЗНАТЬ ЦЕНУ'}
                                      }

export { baseData }