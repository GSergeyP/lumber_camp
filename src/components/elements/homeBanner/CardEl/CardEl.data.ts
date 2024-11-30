import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'div',
  position: 'absolute',
  top: {
    xl: '500px',
    lg: '510px',
    md: '503px',
    sm: '503px',
    xs: '404px'
  },
  left: '50%',
  display: {
    xl: 'flex',
    lg: 'flex',
    md: 'grid',
    sm: 'grid',
    xs: 'grid'
  },
  flexDirection: {
    xl: 'row',
    lg: 'row'
  },
  justifyContent: {
    xl: 'center',
    lg: 'center'
  },
  alignItems: {
    xl: 'center',
    lg: 'center'
  },
  border: '1px solid var(--platinum)',
  borderRadius: '4px',
  bgColor: 'var(--white)',
  styles: 'transform: translateX(-50%); box-shadow: 2px 2px 15px var(--black-10);'
}

///////////////////////////////// 
const commonCardData: TCommonData = {
  variant: 'primary',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: {
    xl: '238px',
    lg: '185px',
    md: '202px',
    sm: '138px',
    xs: '136px'
  },
  height: {
    xl: '308px',
    lg: '265px',
    md: '238px',
    sm: '236px',
    xs: '224px'
  },
  classesActive: false
}

const privateCardData: TTags[] = [
  {
    tags: 'div',
    styles: {
      md: 'grid-column: 1/3; grid-row: 1/2;',
      sm: 'grid-column: 1/3; grid-row: 1/2;',
      xs: 'grid-column: 1/3; grid-row: 1/2;'
    }
  },
  {
    tags: 'div',
    styles: {
      md: 'grid-column: 3/5; grid-row: 1/2;',
      sm: 'grid-column: 3/5; grid-row: 1/2;',
      xs: 'grid-column: 3/5; grid-row: 1/2;'
    }
  },
  {
    tags: 'div',
    styles: {
      md: 'grid-column: 5/7; grid-row: 1/2;',
      sm: 'grid-column: 5/7; grid-row: 1/2;',
      xs: 'grid-column: 1/3; grid-row: 2/3;'
    }
  },
  {
    tags: 'div',
    styles: {
      md: 'grid-column: 2/4; grid-row: 2/3;',
      sm: 'grid-column: 2/4; grid-row: 2/3;',
      xs: 'grid-column: 3/5; grid-row: 2/3;'
    }
  },
  {
    tags: 'div',
    styles: {
      md: 'grid-column: 4/6; grid-row: 2/3;',
      sm: 'grid-column: 4/6; grid-row: 2/3;',
      xs: 'grid-column: 2/4; grid-row: 3/4;'
    }
  }
]

const cardData = useData(commonCardData, privateCardData)

/////////////////////////////////
const commonHeaderCardData: TCommonData = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  width: '100%',
  classes: 'label-header'
}

const privateHeaderCardData: TTags[] = [
  {
    tags: 'div',
    icon: {
      title: 'Sawmill',
      marginBottom: {
        xl: '5px',
        lg: '5px'
      },
      marginRight: {
        xl: '7px',
        lg: '7px'
      },
      width: {
        xl: '100px',
        lg: '77.73px',
        md: '85.76px',
        sm: '77.59px',
        xs: '77.59px'
      },
      height: {
        xl: '58px',
        lg: '49.74px',
        md: '49.74',
        sm: '45px',
        xs: '45px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'div',
    icon: {
      title: 'Coal',
      marginBottom: {
        xl: '2px'
      },
      width: {
        xl: '94.88px',
        lg: '73.75px',
        md: '81.36px',
        sm: '64.69px',
        xs: '64.69px'
      },
      height: {
        xl: '66px',
        lg: '56.6px',
        md: '56.6px',
        sm: '45px',
        xs: '45px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'div',
    icon: {
      title: 'Lumber',
      width: {
        xl: '73px',
        lg: '56.74px',
        md: '62.61px',
        sm: '45px',
        xs: '45px'
      },
      height: {
        xl: '73px',
        lg: '62.61px',
        md: '62.61px',
        sm: '45px',
        xs: '45px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'div',
    icon: {
      title: 'Pallet',
      width: {
        xl: '108.46px',
        lg: '84.3px',
        md: '93.02px',
        sm: '66.86px',
        xs: '66.86px'
      },
      height: {
        xl: '73px',
        lg: '62.61px',
        md: '62.61px',
        sm: '45px',
        xs: '45px'
      },
      classes: 'label-icon'
    }
  },
  {
    tags: 'div',
    icon: {
      title: 'Wood',
      marginBottom: {
        xl: '5px',
        lg: '5px'
      },
      width: {
        xl: '110px',
        lg: '85.5px',
        md: '94.34px',
        sm: '77.34px',
        xs: '77.34px'
      },
      height: {
        xl: '64px',
        lg: '54.89px',
        md: '54.89px',
        sm: '45px',
        xs: '45px'
      },
      classes: 'label-icon'
    }
  }
]

const headerCardData = useData(commonHeaderCardData, privateHeaderCardData)

/////////////////////////////////
const commonHData: TCommonData = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '78px',
  classes: {
    xl: 'bold-18-rob label-text-h',
    lg: 'bold-16-rob label-text-h',
    md: 'bold-16-rob label-text-h',
    sm: 'bold-14-rob label-text-h',
    xs: 'bold-14-rob label-text-h'
  },
  styles: 'text-align: center;'
}

const privateHData: TTags[] = [
  {
    tags: 'h4',
    title: 'ПИЛОВОЧНИК ХВОЙНЫХ ПОРОД',
    padding: {
      xl: '0 40px',
      lg: '0 28px',
      md: '0 30px',
      sm: '0 10px'
    },
    borderRight: '1px solid var(--platinum)'
  },
  {
    tags: 'h4',
    title: 'УГОЛЬ ДРЕВЕСНЫЙ',
    padding: {
      sm: '0 20px',
      xs: '0 20px'
    },
    borderRight: {
      xl: '1px solid var(--platinum)',
      lg: '1px solid var(--platinum)',
      md: '1px solid var(--platinum)',
      sm: '1px solid var(--platinum)'
    },
  },
  {
    tags: 'h4',
    title: 'ПИЛОМАТЕРИАЛЫ',
    borderRight: {
      xl: '1px solid var(--platinum)',
      lg: '1px solid var(--platinum)',
      xs: '1px solid var(--platinum)',
    },
  },
  {
    tags: 'h4',
    title: 'ЕВРОПОДДОНЫ',
    borderRight: {
      xl: '1px solid var(--platinum)',
      lg: '1px solid var(--platinum)',
      md: '1px solid var(--platinum)',
      sm: '1px solid var(--platinum)'
    },
  },
  {
    tags: 'h4',
    title: 'ТЕХН.ДРЕВЕСИНА “ЛЕЖНЁВКА”',
    padding: {
      xl: '0 40px'
    }
  }
]

const hData = useData(commonHData, privateHData)

/////////////////////////////////
const commonPData: TCommonData = {
  marginBottom: {
    xl: '36px',
    lg: '36px',
    sm: '10px',
    xs: '5px'
  },
  padding: '0 10px',
  width: '100%',
  height: {
    xl: '84px',
    lg: '68.61px',
    md: '80px',
    sm: '78px'
  },
  classes: {
    xl: 'reg-16  label-text-p',
    lg: 'reg-14  label-text-p',
    md: 'reg-14  label-text-p',
    sm: 'reg-11 label-text-p',
    xs: 'reg-11 label-text-p'
  },
  styles: 'text-align: center;'
}

const privatePData: TTags[] = [
  {
    tags: 'p',
    title: 'Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей.',
  },
  {
    tags: 'p',
    title: 'Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей.'
  },
  {
    tags: 'p',
    title: 'Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей.'
  },
  {
    tags: 'p',
    title: 'Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей.'
  },
  {
    tags: 'p',
    title: 'Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей.'
  }
]

const pData = useData(commonPData, privatePData)

///////////////////////////////// 
const commonAData: TCommonData = {
  variant: 'secondary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: {
    xl: '195px',
    lg: '160px',
    md: '150px',
    sm: '125px',
    xs: '125px'
  },
  height: '47px',
  classes: 'reg-11 label-a'
} 

const privateAData: TTags[] = [
  {
    tags: 'a',
    to: 'products',
    params: {
      product: 'sawmill'
    }
  },
  {
    tags: 'a',
    to: 'products',
    params: {
      product: 'coal'
    }
  },
  {
    tags: 'a',
    to: 'products',
    params: {
      product: 'lumber'
    }
  },
  {
    tags: 'a',
    to: 'products',
    params: {
      product: 'pallet'
    }
  },
  {
    tags: 'a',
    to: 'products',
    params: {
      product: 'wood'
    }
  }
]

const aData = useData(commonAData, privateAData)

/////////////////////////////////
const useItemData = () => {
  let itemData = [];
    for (let i = 0; i < cardData.length; i++) {
      itemData.push({ 
        card: cardData[i], 
        header: headerCardData[i], 
        h: hData[i], 
        p: pData[i],
        a: {...aData[i], title: 'СПИСОК ПРОДУКЦИИ'}
      })
    }
  return itemData
}

export { blockData, useItemData }