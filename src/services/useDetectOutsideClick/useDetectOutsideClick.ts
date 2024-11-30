import {onBeforeUnmount, onMounted} from 'vue';
import type { Ref } from 'vue';

const useDetectOutsideClick = (component: Ref<string | null>, callback: () => void) => {
    if (!component) return
    const listener = (event: Record<string, any>) => {
        if (event.target !== component.value && event.composedPath().includes(component.value)) {
            return
        }
        if (typeof callback === 'function') {
            callback()
        }
    }
    onMounted(() => { window.addEventListener('click', listener) })
    onBeforeUnmount(() => {window.removeEventListener('click', listener)})

    return {listener}
}

export { useDetectOutsideClick }