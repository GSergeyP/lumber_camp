import { styleProperty } from '@modifiers/SelectUI/SelectUI.constants';
import { ID } from '@constants/id.constants'
import { RouteName, RouteTitle, RouteParams, RouteParamsValue, RouteParamsTitle } from '@/router/router.constants';
import type { TDevice } from '@services/useDevice';
import type { Icon } from '@assets/icons';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type OverrideProps<TypeTitle, T> = {
  [key in keyof TypeTitle]: key extends keyof T ? T[key] : TypeTitle[key]
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TKeyDeviceValue = { [key in TDevice]?: string };
type TKeyDeviceValueBoolean = { [key in TDevice]?: boolean }
type TStyleProperty = { [key in keyof typeof styleProperty]?: string | TKeyDeviceValue };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TPosition = 'relative' | 'absolute' | 'static' | 'sticky' | 'fixed';
type TKeyPosition = { [key in TDevice]?: TPosition };
type TStylePropertyPositionOverride = OverrideProps<
  TStyleProperty,
  { position?: TPosition | TKeyPosition }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TDisplay = 'block' | 'flex' | 'grid' | 'inline-block' | 'table-cell' | 'none';
type TKeyDisplay = { [key in TDevice]?: TDisplay };
type TStylePropertyDisplayOverride = OverrideProps<
  TStylePropertyPositionOverride,
  { display?: TDisplay | TKeyDisplay }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TFDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';
type TKeyFDirection = { [key in TDevice]?: TFDirection };
type TStylePropertyFDirectionOverride = OverrideProps<
  TStylePropertyDisplayOverride,
  { flexDirection?: TFDirection | TKeyFDirection }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TJContent = 'start' | 'end' | 'center' | 'space-between' | 'space-around';
type TKeyJContent = { [key in TDevice]?: TJContent };
type TStylePropertyJContentOverride = OverrideProps<
  TStylePropertyFDirectionOverride,
  { justifyContent?: TJContent | TKeyJContent }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TAItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type TKeyAItems = { [key in TDevice]?: TAItems };
type TStylePropertyAItemsOverride = OverrideProps<
  TStylePropertyJContentOverride,
  { alignItems?: TAItems | TKeyAItems }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TBgRepeat = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | 'inherit' | 'space' | 'round';
type TKeyBgRepeat = { [key in TDevice]?: TBgRepeat };
type TStylePropertyBgRepeatOverride = OverrideProps<
  TStylePropertyAItemsOverride,
  { bgRepeat?: TBgRepeat | TKeyBgRepeat }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type TBgClip = 'padding-box' | 'border-box' | 'content-box';
type TKeyBgClip = { [key in TDevice]?: TAItems };
type TStylePropertyKeyBgClipOverride = OverrideProps<
  TStylePropertyBgRepeatOverride,
  { bgClip?: TBgClip | TKeyBgClip }
>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface IStyleProperty extends TStylePropertyKeyBgClipOverride {
  styles?: string | TKeyDeviceValue
  classes?: string | TKeyDeviceValue
  classesActive?: boolean | TKeyDeviceValueBoolean
  classesError?: boolean | TKeyDeviceValueBoolean
}

/*************************************************************************************************************/
type TVariant = '' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'fivefold' | 'sixfold' | 'sevenfold' | 'eightfold'
type TKeyDeviceValueVariant = { [key in TDevice]?: TVariant };
interface IVariant {
  variant?: TVariant | TKeyDeviceValueVariant
}

/*************************************************************************************************************/
interface ITitle {
  title?: string | TKeyDeviceValue
}

interface ILabel {
  label?: ITitle & IStyleProperty & { icon?: Omit<IIcon, 'tags'> | Omit<IIcon, 'tags'>[] }
}

type TSubTitle = IStyleProperty | ITitle 

type TCommonData = IStyleProperty | IVariant

/*************************************************************************************************************/
interface IWrapper extends IStyleProperty, IVariant, ITitle {
  tags:
    | 'header'
    | 'footer'
    | 'article'
    | 'section'
    | 'fieldset'
    | 'hgroup'
    | 'div'
    | 'span'
    | 'nav'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
  subTitle?: TSubTitle
  icon?: Omit<IIcon, 'tags'> | Omit<IIcon, 'tags'>[]
  legend?: IStyleProperty & ITitle
  mouseover?: string | Record<string, any> | true
  mouseout?: string | Record<string, any> | true
}

/*************************************************************************************************************/
interface IInput
  extends Omit<
      IStyleProperty,
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'bgImage'
      | 'bgPosition'
      | 'bgSize'
      | 'bgRepeat'
      | 'bgClip'
    >,
    IVariant,
    ILabel {
  tags: 'input'
  type: 'text' | 'tel' | 'url' | 'email' | 'password'
  id: `${ID}`
  pattern?: string
  input?: true
  placeholder?: string
  required?: true
  autocomplete?: true
}

/*************************************************************************************************************/
interface ICheckbox
  extends Omit<
      IStyleProperty,
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'bg'
      | 'bgColor'
      | 'bgImage'
      | 'bgPosition'
      | 'bgSize'
      | 'bgRepeat'
      | 'bgClip'
    >,
    IVariant,
    ILabel {
  tags: 'checkbox'
  id: `${ID}`
  name?: string
  value?: string,
  span?: true
}

/*************************************************************************************************************/
interface IRadio
  extends Omit<
      IStyleProperty,
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'bg'
      | 'bgColor'
      | 'bgImage'
      | 'bgPosition'
      | 'bgSize'
      | 'bgRepeat'
      | 'bgClip'
    >,
    IVariant,
    ILabel {
  tags: 'radio'
  id: `${ID}`
  name?: string
  value?: string,
  span?: true
}

/*************************************************************************************************************/
interface IInputSubmit extends IStyleProperty, IVariant, ILabel {
  tags: 'inputButton'
  type: 'submit' | 'reset'
  id: `${ID}`
  value?: string,
}

/*************************************************************************************************************/
interface ITextarea
  extends Omit<
      IStyleProperty,
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
      | 'bg'
      | 'bgColor'
      | 'bgImage'
      | 'bgPosition'
      | 'bgSize'
      | 'bgRepeat'
      | 'bgClip'
    >,
    IVariant,
    ILabel {
  tags: 'textarea'
  id: `${ID}`
  placeholder?: string
}

/*************************************************************************************************************/
interface IForm extends IStyleProperty {
  tags: 'form'
}

/*************************************************************************************************************/
interface IImg
  extends Omit<
    IStyleProperty,
    | 'flexDirection'
    | 'justifyContent'
    | 'alignItems'
    | 'bg'
    | 'bgColor'
    | 'bgImage'
    | 'bgPosition'
    | 'bgSize'
    | 'bgRepeat'
    | 'bgClip'
  > {
  tags: 'img';
  src: string | TKeyDeviceValue
  alt: string | TKeyDeviceValue
}

/*************************************************************************************************************/
interface IIcon 
  extends Omit<
    IStyleProperty,
      | 'flexDirection'
      | 'justifyContent'
      | 'alignItems'
    > {
  tags: 'icon',
  title: `${Icon}`; 
}

/*************************************************************************************************************/
interface IButton extends IStyleProperty, ITitle, IVariant {
  tags: 'button'
  click?: string | Record<string, any> | true
  mouseover?: string | Record<string, any> | true
  icon?: Omit<IIcon, 'tags'> | Omit<IIcon, 'tags'>[]
  subTitle?: TSubTitle
}

/*************************************************************************************************************/
interface ILink 
  extends 
    IStyleProperty,
    IVariant {
  tags: 'a'
  to: `${RouteName}`
  params?: { [key in RouteParams]?: `${RouteParamsValue}` }
  title?: `${RouteTitle}` | `${RouteParamsTitle}`;
  icon?: Omit<IIcon, 'tags'> | Omit<IIcon, 'tags'>[]
  click?: true;
}

type TTags = IWrapper | IInput | ICheckbox | IRadio | IInputSubmit | ITextarea | IForm | IImg | IButton | IIcon | ILink ;

export type { TCommonData, TTags };
