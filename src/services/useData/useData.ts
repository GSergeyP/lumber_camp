const useData = (commonData: Record<string, any>, privateData: Array<Record<string, any>>): Array<Record<string, any>> => {
  let data: Array<{}> = [];
  privateData.map((item) => {
    data.push(Object.assign({}, commonData, item));
  });
  return data;
};

export { useData };