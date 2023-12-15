export const isString = (value: any): value is string => {
  return Object.prototype.toString.call(value) === '[object String]';
};
export const isNumber = (value: any): value is number => {
  return Object.prototype.toString.call(value) === '[object Number]';
};
export const isNull = (value: any): value is null => {
  return Object.prototype.toString.call(value) === '[object Null]';
};
export const isUndefined = (value: any): value is undefined => {
  return Object.prototype.toString.call(value) === '[object Undefined]';
};
export const isArray = (value: any): value is any[] => {
  return Object.prototype.toString.call(value) === '[object Array]';
};
export const isObject = (value: any): value is object => {
  return Object.prototype.toString.call(value) === '[object Object]';
};
export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};
/**
 判断是不是假值 （null、""、undefind、{},[]）
*/
export const isFake = (value: any) => {
  switch (value) {
    case isNaN(value):
      return true;
    case isUndefined(value):
      return true;
    case isString(value):
      return value.length === 0;
    case isObject(value):
      return Object.keys(value).length === 0;
    case isArray(value):
      return value.length === 0;
    default:
      return false;
  }
};
