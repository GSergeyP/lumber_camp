import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

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
  position: 'relative',
  top: {
    xl: '75px',
    lg: '70px',
    md: '70px',
    sm: '62px',
    xs: '62px'
  },
  marginBottom: '39px',
  width: {
    xl: '1201px',
    lg: '936px',
    md: '696px',
    sm: '416px',
    xs: '272px'
  },
  height: {
    xl: '389px',
    lg: '389px',
    md: '389px',
    sm: 'fit-content',
    xs: 'fit-content'
  }
}

///////////////////////////
const leftData: TTags = {
  tags: 'div',
  display: 'flex',
  flexDirection: 'column',
  width: {
    xl: '483px',
    lg: '373px',
    md: '373px',
    sm: '100%',
    xs: '100%'
  }
}

const commonTextData: TCommonData = {
  marginBottom: {
    xl: '22px',
    lg: '22px',
    md: '20px',
    sm: '22px',
    xs: '22px'
  },
  classes: 'reg-16'
}

const officeData: TTags[] = [
  {
    tags: 'h2',
    title: 'НАШ ОФИС',
    classes: 'reg-24'
  },
  {
    tags: 'icon',
    title: 'LineDouble',
    width: {
      xl: '402px',
      lg: '292px',
      md: '292px',
      sm: '272px',
      xs: '272px'
    },
    height: '3px',
    styles: 'cursor: default;'
  },
  {
    tags: 'p',
    title: 'Адрес: 385 Noah Place Suite 878',
    icon: {
      title: 'Mark',
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'Телефон: 8(83196)43610',
    icon: {
      title: 'PhoneEct',
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'Время работы: 9:00 - 21:00',
    icon: {
      title: 'ClockEtc',
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'E-mail: mrmuradov@yandex.ru',
    icon: {
      title: 'Email',
      styles: 'cursor: default;'
    }
  }
]

const storage1Data: TTags[] = [
  {
    tags: 'h2',
    title: 'НАШ СКЛАД 1',
    classes: 'reg-24'
  },
  {
    tags: 'icon',
    title: 'LineDouble',
    width: {
      xl: '402px',
      lg: '292px',
      md: '292px',
      sm: '272px',
      xs: '272px'
    },
    height: '3px',
    styles: 'cursor: default;'
  },
  {
    tags: 'p',
    title: 'Время работы: 9:00 - 21:00',
    icon: {
      title: 'ClockEtc',
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'Адрес: 385 Noah Place Suite 878',
    icon: {
      title: 'Mark',
      styles: 'cursor: default;'
    }
  },
]

const storage2Data: TTags[] = [
  {
    tags: 'h2',
    title: 'НАШ СКЛАД 2',
    classes: 'reg-24'
  },
  {
    tags: 'icon',
    title: 'LineDouble',
    width: {
      xl: '402px',
      lg: '292px',
      md: '292px',
      sm: '272px',
      xs: '272px'
    },
    height: '3px',
    styles: 'cursor: default;'
  },
  {
    tags: 'p',
    title: 'Время работы: 9:00 - 21:00',
    icon: {
      title: 'ClockEtc',
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'Адрес: 385 Noah Place Suite 878',
    icon: {
      title: 'Mark',
      styles: 'cursor: default;'
    }
  },
]

const itemLeftData = [useData(commonTextData, officeData), useData(commonTextData, storage1Data), useData(commonTextData, storage2Data)]

///////////////////////////
const rightData: TTags = {
  tags: 'div',
  width: 'fit-content',
  height: 'fit-content'
}

const commonRightData: TCommonData = {
  width: {
    xl: '718px',
    lg: '563px',
    md: '323px',
    sm: '418px',
    xs: '272px'
  },
  height: '389px'
}

const privateRightData: TTags[] = [
  {
    tags: 'img',
    src: 'contacts/map.png',
    alt: 'Наш офис - Лесозаготовка'
  },
  {
    tags: 'img',
    src: 'contacts/map.png',
    alt: 'Склад 1 - Лесозаготовка'
  },
  {
    tags: 'img',
    src: 'contacts/map.png',
    alt: 'Склад 2 - Лесозаготовка'
  }
]

const itemRightData = useData(commonRightData, privateRightData)

export { blockData, leftData, itemLeftData, rightData, itemRightData }