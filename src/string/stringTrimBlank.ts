import { isString } from '../other/is';

/**
 过滤string中所有的空格
*/
export const stringTrimBlank = (str: string) => {
  if (!isString(str)) throw new Error(`${str} no string`);
  return str.replace(/\s+/g, '');
};
