import type { TTags, TCommonData } from '@modifiers/TagsMo.type';
import { useData } from '@services/useData';

const blockData: TTags = {
  tags: 'form',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const commonItemData: TCommonData = {
  width: {
    xl: '295px',
    lg: '295px',
    md: '295px',
    sm: '295px',
    xs: '224px'
  },
  height: {
    xl: '50px',
    lg: '50px',
    md: '50px',
    sm: '50px',
    xs: '45px'
  },
  marginBottom: '30px'
}    

const privateItemData: TTags[] = [
  {
    tags: 'input',
    variant: 'primary',
    type: 'text',
    id: 'input_modal_name',
    required: true,
    placeholder: 'Имя',
    classes: 'label-icon',
    label: {}
  },
  {
    tags: 'input',
    type: 'tel',
    variant: 'primary',
    id: 'input_modal_phone',
    pattern: '[0-9]{10}',
    required: true,
    placeholder: 'Телефон',
    classes: 'label-icon',
    label: {}
  },
  {
    tags: 'input',
    type: 'email',
    variant: 'secondary',
    id: 'input_modal_email',
    required: true,
    placeholder: 'Email',
    classes: 'label-icon',
    label: {}
  },
  {
    tags: 'inputButton',
    type: 'submit',
    variant: 'primary',
    id: 'submit_modal',
    value: 'ОТПРАВИТЬ',
    marginBottom: '0'
  }
]

const itemData = useData(commonItemData, privateItemData)

export { blockData, itemData }