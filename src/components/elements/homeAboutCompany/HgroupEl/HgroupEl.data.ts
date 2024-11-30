import type { TTags } from '@modifiers/TagsMo.type';

const blockData: TTags = {
  tags: 'hgroup',
  position: 'absolute',
  top: {
    xl: '126px',
    lg: '126px',
    md: '132px',
    sm: '82px',
    xs: '40px'
  },
  left: {
    xl: '334px',
    lg: '110px',
    md: '110px',
    sm: '55px',
    xs: '35px'
  },
  display: 'flex',
  flexDirection: 'column',
}

const itemData: TTags[] = [
  {
    tags: 'h3',
    title: 'О Компании',
    color: 'var(--light-green)',
    classes: 'reg-24',
    icon: {
      title: 'Line',
      position: 'absolute',
      top: '37px',
      styles: 'stroke: var(--light-green)'
    }
  },
  {
    tags: 'h2',
    title: 'Quam adipisci velit, sed quia numquam eius modi tempora incidunt!',
    marginTop: '30px',
    width: {
      xl: '680px',
      lg: '660px',
      md: '550px',
      sm: '320px',
      xs: '220px'
    },
    color: 'var(--white)',
    classes: {
      xl: 'med-30',
      lg: 'med-30',
      md: 'med-30',
      sm: 'med-24',
      xs: 'med-24'
    }
  },
  {
    tags: 'p',
    title: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia est.',
    marginTop: '10px',
    width: {
      xl: '780px',
      lg: '780px',
      md: '550px',
      sm: '375px',
      xs: '270px'
    },
    color: 'var(--white)',
    classes: 'reg-16'
  }
]

export { blockData, itemData }