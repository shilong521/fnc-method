import { isArray, isFake } from '../other/is';

/**
 过滤array中的假值 （null、""、undefind、{}、[]）
*/
export const arrayOmitFake = (array: any[]) => {
  if (!isArray(array)) throw new Error(`${array} no array`);
  return array.filter((v) => !isFake(v));
};
