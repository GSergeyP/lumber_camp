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
  marginTop: '55px',
  width: {
    xl: '1201px',
    lg: '935px',
    md: '693px',
    sm: '272px',
    xs: '272px'
  }
}

////////////////////////////
const cardData: TTags = {
  tags: 'div',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: '10px',
  marginBottom: {
    sm: '30px',
    xs: '30px'
  },
  width: {
    xl: '575px',
    lg: '442px',
    md: '321px',
    sm: '272px',
    xs: '272px'
  },
  height: {
    xl: '350px',
    lg: '359px',
    md: '380px',
    sm: '380px',
    xs: '380px'
  },
  styles: 'box-shadow: 2px 2px 15px var(--black-10);'
}

const iconData: TTags = {
  tags: 'icon',
  title: '',
  marginTop: {
    xl: '43px',
    lg: '43px',
    md: '23px',
    sm: '13px',
    xs: '13px'
  },
  width: '105px',
  height: '105px',
  styles: 'cursor: default;'
}

const h2Data: TTags = {
  tags: 'h2',
  marginTop: '15px',
  classes: 'reg-22-sfp'
}

const pData: TTags = {
  tags: 'p',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: {
    xl: '466px',
    lg: '375px',
    md: '242px',
    sm: '238px',
    xs: '238px'
  },
  marginBottom: {
    xl: '43px',
    lg: '43px',
    md: '23px',
    sm: '33px',
    xs: '33px'
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
    title: 'Безналичный расчет',
    subTitle: 'Заключаем договор, выставляем Вам счет на оплату, после 100% предоплаты осуществляем отгрузку товара. Мы работаем как с НДС, так и без НДС.',
    icon: 'Card'
  },
  {
    title: 'Наличный расчет',
    subTitle: 'Работаем со 100% предоплатой, после этого осуществляем отгрузку товара.',
    icon: 'Money'
  }
]

const useItemData = ():Record<string, any>[] => {
  let itemData = [];
    for (let i = 0; i < data.length; i++) {
      itemData.push({ 
        card: Object.assign({}, cardData), 
        numberIcon: {...Object.assign({}, iconData), title: data[i].icon}, 
        h2: {...Object.assign({}, h2Data), title: data[i].title}, 
        p:  {...Object.assign({}, pData), title: data[i].subTitle}
      })
    }
  return itemData
}

export { blockData, useItemData }