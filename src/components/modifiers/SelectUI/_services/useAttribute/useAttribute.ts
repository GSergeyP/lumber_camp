const useAttribute = (device: string, data: Record<string, string> | string | boolean): string | boolean | null => {
  let dataCurrent;
    if (data instanceof Object && data[device as keyof typeof data]) dataCurrent = data[device as keyof typeof data]
    else if (typeof data === 'string' || typeof data === 'boolean') dataCurrent = data
    else dataCurrent = null
  return dataCurrent;
};

export { useAttribute };
