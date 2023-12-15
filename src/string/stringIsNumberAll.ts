import { isString } from '../other/is';

/**
 判断string是否都是数字\d,[0-9]
*/
export const stringIsNumberAll = (str: string) => {
  if (!isString(str)) throw new Error(`${str} no string`);
  return !!str.length && /^\d+$/.test(str);
};
