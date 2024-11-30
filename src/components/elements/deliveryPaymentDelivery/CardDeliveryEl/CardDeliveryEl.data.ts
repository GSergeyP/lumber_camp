import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: {
    xl: 'row',
    lg: 'row',
    md: 'row',
    sm: 'column',
    xs: 'column'
  },
  justifyContent: {
    xl: 'space-between',
    lg: 'space-between',
    md: 'space-between',
    sm: 'center',
    xs: 'center'
  },
  alignItems: 'center',
  width: {
    xl: '1201px',
    lg: '934px',
    md: '693px',
    sm: '272px',
    xs: '272px'
  }
}

const arrowIcon: TTags = {
  tags: 'icon',
  title: 'Arrow',
  marginTop: {
    xl: '105px',
    lg: '105px',
    md: '105px',
    sm: '20px',
    xs: '20px'
  },
  width: '22.5px',
  height: '17px',
  styles: {
    xl: 'cursor: default;',
    lg: 'cursor: default;',
    md: 'cursor: default;',
    sm: 'transform: rotate(90deg); cursor: default;',
    xs: 'transform: rotate(90deg); cursor: default;'
  }
}

////////////////////////////
const cardData: TTags = {
  tags: 'div',
  position: 'relative',
  top: {
    sm: '-30px',
    xs: '-30px'
  },
  marginTop: {
    xl: '33px',
    lg: '33px',
    md: '33px',
  }
}

const topCardData: TTags = {
  tags: 'div',
  position: 'relative',
}

const iconData: TTags = {
  tags: 'icon',
  title: '',
  width: 'aoto',
  height: '100px',
  styles: 'cursor: default; opacity: 0.15;'
}


////////////////////////////
const bottomCardData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: {
    xl: '-30px',
    lg: '-30px',
    md: '-30px',
    sm: '-32px',
    xs: '-32px'
  },
  borderRadius: '10px',
  width: {
    xl: '360px',
    lg: '271px',
    md: '202px',
    sm: '270px',
    xs: '270px'
  },
  height: {
    xl: '210px',
    lg: '210px',
    md: '248px',
    sm: '265px',
    xs: '265px'
  },
  bgColor: 'var(--white)',
  styles: 'box-shadow: 2px 2px 15px var(--black-10);'
}

const h2Data: TTags = {
  tags: 'h2',
  marginBottom: '10px',
  width: {
    md: '160px',
    sm: '160px',
    xs: '160px'
  },
  styles: {
    md: 'text-align: center;',
    sm: 'text-align: center;',
    xs: 'text-align: center;'
  },
  classes: 'reg-22-sfp'
}

const pData: TTags = {
  tags: 'p',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: {
    xl: '317px',
    lg: '202px',
    md: '180px',
    sm: '180px',
    xs: '180px'
  },
  classes: 'lig-16-sfu',
  styles: 'text-align: center;',
  icon: {
    title: 'Line',
    marginBottom: '10px',
    styles: 'cursor: default; stroke: var(--black);'
  }
}

const data = [
  {
    title: 'Оформление заявки',
    subTitle: 'Lorem ipsum dolor amet, consectetuer adipiscing elit, sed diam nonummy. euismod tincidunt ut laoreet dolore.',
    icon: 'One'
  },
  {
    title: 'Звонок от сотрудника',
    subTitle: 'Lorem ipsum dolor amet, consectetuer adipiscing elit, sed diam nonummy. euismod tincidunt ut laoreet dolore.',
    icon: 'Two'
  },
  {
    title: 'Доставка товара',
    subTitle: 'Lorem ipsum dolor amet, consectetuer adipiscing elit, sed diam nonummy. euismod tincidunt ut laoreet dolore.',
    icon: 'Three'
  }
]

const useItemData = ():Record<string, any>[] => {
  let itemData = [];
    for (let i = 0; i < data.length; i++) {
      itemData.push({ 
        card: Object.assign({}, cardData), 
        topCard: Object.assign({}, topCardData),
        bottomCard: Object.assign({}, bottomCardData),
        numberIcon: {...Object.assign({}, iconData), title: data[i].icon}, 
        h2: {...Object.assign({}, h2Data), title: data[i].title}, 
        p:  {...Object.assign({}, pData), title: data[i].subTitle}
      })
    }
  return itemData
}

export { blockData, arrowIcon, useItemData }