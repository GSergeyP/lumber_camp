<template>
  <FormUI v-if="tags === 'form'" :data="data"  @submit.prevent="onSubmit">
    <slot />
  </FormUI>

  <InputUI 
    v-else-if="tags === 'input'" 
    :data="data" 
    :ref="inputRef[id]" 
    :label="props.label ? {...props.label, tags: 'label', for: id } : null"
    v-model="inputRef[id]"  
  />

  <CheckboxUI 
    v-else-if="tags === 'checkbox'" 
    :data="data" 
    :label="props.label ? {...props.label, tags: 'label', for: id } : null"
  />

  <RadioUI 
    v-else-if="tags === 'radio'" 
    :data="data" 
    :label="props.label ? {...props.label, tags: 'label', for: id } : null"
  />

  <InputButtonUI 
    v-else-if="tags === 'inputButton'" 
    :data="data"
    :label="props.label ? {...props.label, tags: 'label', for: id } : null"
  />
  
  <TextareaUI 
    v-else-if="tags === 'textarea'" 
    :data="data" 
    :label="props.label ? {...props.label, tags: 'label', for: id } : null"
  />
  
  <ImgUI v-else-if="tags === 'img'" :data="data" />
  
  <ButtonUI v-else-if="tags === 'button'" :data="data">
    <slot />
  </ButtonUI>
  
  <IconUI v-else-if="tags === 'icon'" :data="data" />
  
  <LinkUI v-else-if="tags === 'a'" :data="data" :params="props.params ? {...props.params} : null">
    <slot />
  </LinkUI>

  <TagsUI v-else :data="data">
    <slot />
  </TagsUI>
</template>

<script setup lang="ts">
import { computed, ref, type PropType, watch } from 'vue';
import { useDevice } from '@services/useDevice';
import { useData } from './_services/useData';
import { Emits } from '@constants/emits.constants';
import FormUI from './FormUI/FormUI.vue';
import InputUI from './InputUI/InputUI.vue';
import InputButtonUI from './InputButtonUI/InputButtonUI.vue';
import CheckboxUI from './CheckboxUI/CheckboxUI.vue';
import RadioUI from './RadioUI/RadioUI.vue';
import TextareaUI from './TextareaUI/TextareaUI.vue';
import ButtonUI from './ButtonUI/ButtonUI.vue';
import ImgUI from './ImgUI/ImgUI.vue';
import IconUI from './IconUI/IconUI.vue';
import LinkUI from './LinkUI/LinkUI.vue';
import TagsUI from './TagsUI/TagsUI.vue';

const inputRef = ref<Record<string, string>>({});
const device = useDevice();
const props = defineProps({
  //////////////////////////////////////////////////////////////////
  tags: {
    type: String as PropType<string>,
    default: null
  },
  title: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  src: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  alt: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  type: {
    type: String as PropType<string>,
    default: null
  },
  id: {
    type: String as PropType<string>,
    default: null
  },
  pattern: {
    type: String as PropType<string>,
    default: null
  },
  name: {
    type: String as PropType<string>,
    default: null
  },
  placeholder: {
    type: String as PropType<string>,
    default: null
  },
  required: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  autocomplete: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  span: {
    type: Boolean as PropType<true>,
    default: false
  },
  label: {
    type: Object as PropType<Record<string, string>>,
    default: null
  },
  variant: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  to: {
    type: String as PropType<string>,
    default: null
  },
  params: {
    type: Object as PropType<Record<string, string>>,
    default: null
  },
  clicked: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  method: {
    type: String as PropType<string>,
    default: null
  },
  for: {
    type: String as PropType<string>,
    default: null
  },
  value: {
    type: String as PropType<string>,
    default: null
  },
  //////////////////////////////////////////////////////////////////
  styles: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  classes: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  classesActive: {
    type: [Boolean, Object] as PropType<boolean | Record<string, boolean>>,
    default: false
  },
  classesError: {
    type: [Boolean, Object] as PropType<boolean | Record<string, boolean>>,
    default: false
  },
  position: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  top: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bottom: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  left: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  right: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  display: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  flexDirection: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  justifyContent: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  alignItems: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  margin: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  marginTop: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  marginBottom: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  marginLeft: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  marginRight: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  padding: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  paddingTop: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  paddingBottom: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  paddingLeft: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  paddingRight: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  width: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  height: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bg: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgColor: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgImage: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgPosition: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgSize: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgRepeat: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  bgClip: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  border: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderTop: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderBottom: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderLeft: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderRight: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderColor: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  borderRadius: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  },
  color: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null
  }
});

const data = computed(() => {
  return useData(device.value, props)
});

const emits = defineEmits([Emits.EVENT_UPDATE_INPUT_SUBSIDIARY, Emits.EVENT_SUBMIT_FORM_SUBSIDIARY]);
  const useEventEmits = (data: Record<string, any>) => {
    return emits(data.emits, data.data)
  }

watch(inputRef.value, (newInputRef) => {
  useEventEmits({emits: Emits.EVENT_UPDATE_INPUT_SUBSIDIARY, data: newInputRef})
  })
  
const onSubmit = (data: Record<string, string>) => {
  useEventEmits({emits: Emits.EVENT_SUBMIT_FORM_SUBSIDIARY, data: data})
}
</script>