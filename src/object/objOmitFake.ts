import { isFake, isObject } from '../other/is';

/**
 过滤object中的假值 （null、""、undefind、{}、[]）
*/
export const objOmitFake = <O extends Record<any, any>>(obj: O) => {
  if (!isObject(obj)) throw new Error(`${obj} no object`);
  const resObj: Record<any, any> = {};
  for (const key in obj) {
    if (!isFake(obj[key])) {
      resObj[key] = obj[key];
    }
  }
  return resObj;
};
