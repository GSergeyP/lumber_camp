import type { Device } from './useDevice.constants';
import type { ComputedRef } from 'vue';

type TDevice = `${Device}`;

type TUseDevice = ComputedRef<TDevice>;

export type { TDevice, TUseDevice };
