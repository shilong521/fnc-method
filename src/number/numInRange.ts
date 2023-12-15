import { isNull, isNumber } from '../other/is';

/**
 判断一个数字是否在指定范围内,包括start，不包过end，如果指定start=null那么就是num<end，end=null就是num>=start
*/
export const numInRange = (
  num: number,
  start: number | null,
  end: number | null
) => {
  if (!isNumber(num)) throw new Error(`${num} no number`);
  if (isNull(start) && isNull(end))
    throw new Error(`start & end cannot both equal null`);
  if (isNumber(start) && isNumber(end)) {
    return num >= start && num < end;
  }
  if (isNumber(start)) {
    return num >= start;
  }
  if (isNumber(end)) {
    return num < end;
  }
  return false;
};
