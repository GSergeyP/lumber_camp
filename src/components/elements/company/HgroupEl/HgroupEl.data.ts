import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'hgroup',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: {
    xl: '75px auto 0 auto',
    lg: '65px auto 0 auto',
    md: '69px auto 0 auto',
    sm: '69px auto 0 auto',
    xs: '69px auto 0 auto'
  },
  width: {
    xl: '1202px',
    lg: '933px',
    md: '710px',
    sm: '418px',
    xs: '273px'
  }
}

const commonItemData: TCommonData = {
  marginBottom: {
    xl: '17px',
    lg: '22px',
    md: '22px',
    sm: '19px',
    xs: '18px'
  },
  styles: 'text-align: justify;',
  classes:  {
    xl: 'reg-18',
    lg: 'reg-18',
    md: 'reg-18',
    sm: 'reg-16',
    xs: 'reg-16'
  }
}

const privateItemData: TTags[] = [
  {
    tags: 'h4',
    title: '«М-Инвест»',
    marginBottom: '0',
    classes: 'med-24'
  },
  {
    tags: 'p',
    title: 'Общество с ограниченной ответственностью',
    display: 'flex',
    flexDirection: 'column-reverse',
    icon: {
      title: 'LineDouble',
      marginTop: {
        xl: '22px',
        lg: '22px',
        md: '24px',
        sm: '30px',
        xs: '28px'
      },
      width: {
        xl: '438px',
        lg: '438px',
        md: '438px',
        sm: '418px',
        xs: '273px'
      },
      height: {
        xl: '3px',
        lg: '3px',
        md: '3px',
        sm: '3px',
        xs: '3px'
      },
      styles: 'cursor: default;'
    }
  },
  {
    tags: 'p',
    title: 'Компания ООО «М-Инвест» осуществляет свою деятельность с октября 2005 года, а с 2010 года является арендатором лесного участка площадью 7500 га, годовой объем рубки составляет 25 000 м.куб., кроме того компания активно участвует на аукционах купли-продажи древесины. Совокупный объем рубки составляет 45 000 м.куб. в год.',
    width: {
      xl: '985px',
      lg: '81%',
      md: '70%'
    }
  },
  {
    tags: 'p',
    title: 'В собственности компании имеется три пилорамы (Р63-4Б, дисковая пилорама ЦДС-1100, ленточная пилорама Wood-maizer), две автоматические линии по распиловке лафета на обрезной пиломатериал (производство Алтайтехмаш), линия по сборке различных видов деревянной тары с использованием пневмоинструмента.',
    width: {
      xl: '985px',
      lg: '81%',
      md: '70%'
    }
  },
  {
    tags: 'p',
    title: 'Кроме того в компании находятся 5 автомобилей МАЗ с полуприцепами, 6 автомобилей Урал с манипулятором, трактора Т-170, Т-150, трелевочник ТДТ-55, 24 единицы МТЗ-82, погрузчики В-138.00010 и вилочный погрузчик, ежедневно работают 9 лесозаготовительных бригад. В компании присутствуют все циклы лесохозяйственной деятельности, начиная с лесовосстановления и сопутствующих ему работ, до рубки спелых насаждений. Ежегодный объем лесовосстановления составляет 54га.',
    width: {
      xl: '985px'
    }
  },
  {
    tags: 'p',
    title: 'Так же мы занимаемся розничной и оптовой торговлей строительных материалов, перевозкой грузов специализированными транспортными средствами.'
  },
  {
    tags: 'p',
    title: 'Имеющиеся мощности компания позволяют своевременно выполнять свои обязательства.'
  },
  {
    tags: 'p',
    title: 'Наша компания зарекомендовала себя на рынке как надежного партнера и гарантированного поставщика качественной продукции. Мы имеем большой положительный опыт со многими организациями, как в Нижегородской области, так и по всей России, среди них фанерные заводы ООО «Мануфактура» и ЗАО «Плайтерра», ГК Газпром, ООО «Пешеланский гипсовый завод», ООО «Стора Энсо Пакаджинг ББ», ООО «Диверус», ООО «Платан», ЗАО «ТрансРегионЦентр» и многими другими.'
  },
  {
    tags: 'p',
    title: 'Основными принципами нашей работы в вопросах взаимодействия с партнерами являются: гарантированное выполнение своих обязательств, честность и порядочность.'
  },
  {
    tags: 'p',
    title: 'Наши партнеры дают высокую оценку нашей продукции и, как правило, работают с нами долгие годы.'
  },
  {
    tags: 'h6',
    title: 'С уважением,',
    styles: 'text-align: right;'
  },
  {
    tags: 'h6',
    title: 'Генеральный директор Мурадов П.А.',
    styles: 'text-align: right;'
  },
  {
    tags: 'img',
    src: 'company/cert.png',
    alt: 'Сертификат',
    position: {
      xl: 'absolute',
      lg: 'absolute',
      md: 'absolute'
    },
    top: {
      xl: '95px',
      lg: '85px',
      md: '105px'
    },
    right: {
      xl: '10px',
      lg: '10px',
      md: '10px',
    },
    margin: {
      sm: '0 auto',
      xs: '0 auto'
    },
    border: {
      xl: '15px solid var(--black)',
      lg: '12px solid var(--black)',
      md: '12px solid var(--black)',
      sm: '10px solid var(--black)',
      xs: '8px solid var(--black)'
    },
    borderRadius: '5px',
    width: {
      xl: '193px',
      lg: '160px',
      md: '184px',
      sm: '184px',
      xs: '184px'
    },
    height: 'auto',
  }
]

const itemData = useData(commonItemData, privateItemData)

export { blockData, itemData }