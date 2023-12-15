import { isArray, isString } from '../other/is';

const treeFindC = <T extends Record<string, any>>(
  tree: T[],
  func: (data: T) => boolean,
  children: string
): T | null => {
  for (const data of tree) {
    if (func(data)) return data;
    if (data[children]) {
      const res = treeFindC(data[children], func, children);
      if (res) return res;
    }
  }
  return null;
};

/**
 * 查找树形节点
 * @readme tree:树形结构，func:满足条件的回调函数，children:子节点的key
 * @default children='children'
 */
export const treeFind = <T extends Record<string, any>>(
  tree: T[],
  func: (data: T) => boolean,
  children: string = 'children'
): T | null => {
  if (!isArray(tree)) throw new Error(`${tree} no array`);
  if (!func) throw new Error(`${func} no function`);
  if (!isString(children)) throw new Error(`${children} no string`);
  return treeFindC(tree, func, children);
};
