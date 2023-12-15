import { isString } from '../other/is';

/**
通过key获取urlSeach参数的value
*/
export const getUrlSearchValueByKey = (key: string) => {
  if (!isString(key)) throw new Error(`${key} no string`);
  const values = location.search
    .split('&')
    .filter((v) => v.includes(key))
    .map((v) => v.split('=')[1]);
  switch (values.length) {
    case 0:
      return undefined;
    case 1:
      return values[0];
    default:
      return values;
  }
};
