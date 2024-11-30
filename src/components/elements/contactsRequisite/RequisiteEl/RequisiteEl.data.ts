import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'div',
  display: {
    xl: 'grid',
    lg: 'grid',
    md: 'grid',
    sm: 'flex',
    xs: 'flex'
  },
  flexDirection: {
    sm: 'column',
    xs: 'column'
  },
  marginTop: '50px',
  paddingTop: {
    xl: '30px',
    lg: '30px',
    md: '30px',
    sm: '20px',
    xs: '30px'
  },
  paddingLeft: {
    xl: '50px',
    lg: '30px',
    md: '30px',
    sm: '15px',
    xs: '15px'
  },
  width: {
    xl: '1200px',
    lg: '936px',
    md: '696px',
    sm: '416px',
    xs: '272px'
  },
  height: {
    xl: '215px',
    lg: '215px',
    md: '330px',
    sm: '370px',
    xs: '440px'
  },
  borderRadius: '10px',
  styles: {
    xl: 'grid-template-columns: 650px auto; grid-template-rows: repeat(5, 30px); box-shadow: 2px 2px 15px var(--black-10);',
    lg: 'grid-template-columns: 590px auto; grid-template-rows: repeat(5, 30px); box-shadow: 2px 2px 15px var(--black-10);',
    md: 'grid-template-columns: auto; grid-template-rows: repeat(9, 30px); box-shadow: 2px 2px 15px var(--black-10);',
    sm: 'box-shadow: 2px 2px 15px var(--black-10);',
    xs: 'box-shadow: 2px 2px 15px var(--black-10);'
  }
}

const commonHeadingData: TCommonData = {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'start',
  alignItems: {
    xl: 'center',
    lg: 'center',
    md: 'center',
    sm: 'start',
    xs: 'start'
  },
  marginBottom: {
    sm: '11px',
    xs: '11px'
  },
  width: {
    sm: '350px',
    xs: '242px'
  },
  styles: 'font-weight: bold;',
  classes: {
    xl: 'reg-16',
    lg: 'reg-18',
    md: 'reg-18',
    sm: 'reg-18',
    xs: 'reg-18'
  }
}

const privateHeadingData: TTags[] = [
  {
    tags: 'p',
    title: 'ИНН:'
  },
  {
    tags: 'p',
    title: 'КПП:'
  },
  {
    tags: 'p',
    title: 'Адрес:'
  },
  {
    tags: 'p',
    title: 'Р/С:'
  },
  {
    tags: 'p',
    title: 'Банк:'
  },
  {
    tags: 'p',
    title: 'К/С:'
  },
  {
    tags: 'p',
    title: 'БИК:'
  },
  {
    tags: 'p',
    title: 'Телефон/факс:'
  },
  {
    tags: 'p',
    title: 'E-mail:'
  }
]

const itemHeadingData = useData(commonHeadingData, privateHeadingData)

///////////////////////////////////////////
const commonContentData: TCommonData = {
  marginLeft: '5px',
  classes: {
    xl: 'reg-16',
    lg: 'reg-18',
    md: 'reg-18',
    sm: 'reg-18',
    xs: 'reg-18'
  }
}

const privateContentData: TTags[] = [
  {
    tags: 'span',
    title: '5221004940'
  },
  {
    tags: 'span',
    title: '522101001'
  },
  {
    tags: 'span',
    title: '607800 г. Лукоянов, ул. Загородная, д. 64б'
  },
  {
    tags: 'span',
    title: '40702810442240100309'
  },
  {
    tags: 'span',
    title: 'Волго-Вятский банк ПАО Сбербанк г. Нижний Новгород'
  },
  {
    tags: 'span',
    title: '30101810900000000603'
  },
  {
    tags: 'span',
    title: '042202603'
  },
  {
    tags: 'span',
    title: '(83196) 4-36-10'
  },
  {
    tags: 'span',
    title: 'mrMuradov@yandex.ru',
  }
]

const itemContentData = useData(commonContentData, privateContentData)

export { blockData, itemHeadingData, itemContentData }