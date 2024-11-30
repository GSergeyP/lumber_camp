import { computed, onMounted, onUnmounted, ref } from 'vue';
import { Device, Breakpoint } from './useDevice.constants';
import type { TDevice, TUseDevice } from './useDevice.type';

const useDevice = (): TUseDevice => {
  const screenWidth = ref<number>(0);
  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener('resize', changeSizeWindow);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const identifyDevice = computed<TDevice>(() => {
    let currentDevice;
      if (screenWidth.value >= Breakpoint.XL) currentDevice = Device.XL
      else if (screenWidth.value < Breakpoint.XL && screenWidth.value >= Breakpoint.LG) currentDevice = Device.LG
      else if (screenWidth.value < Breakpoint.LG && screenWidth.value >= Breakpoint.MD) currentDevice = Device.MD
      else if (screenWidth.value < Breakpoint.MD && screenWidth.value >= Breakpoint.SM) currentDevice = Device.SM
      else currentDevice = Device.XS
    return currentDevice;
  });

  return identifyDevice;
};

export { useDevice };
