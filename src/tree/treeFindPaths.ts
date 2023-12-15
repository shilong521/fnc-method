import { isArray, isString } from '../other/is';

const treeFindPath = <T extends Record<string, any>, K extends keyof T>(
  tree: T[],
  func: (data: T) => boolean,
  key: K,
  children: string,
  path: any[] = []
): K[] => {
  for (const data of tree) {
    path.push(data[key]);
    if (func(data)) return path;
    if (data[children]) {
      const findChildren = treeFindPath(
        data[children],
        func,
        key,
        children,
        path
      );
      if (findChildren.length) return findChildren;
    }
    path.pop();
  }
  return [];
};

/**
 * 查找树形节点路径
 * @readme tree:树形结构，func:满足条件的回调函数，key:需要查询并返回路径的key，children:子节点的key
 * @default children='children'
 */
export const treeFindPaths = <T extends Record<string, any>, K extends string>(
  tree: T[],
  func: (data: T) => boolean,
  key: K,
  children: string = 'children'
): K[] => {
  if (!isArray(tree)) throw new Error(`${tree} no array`);
  if (!func) throw new Error(`${func} no function`);
  if (!isString(key)) throw new Error(`${key} no string`);
  if (!isString(children)) throw new Error(`${children} no string`);
  return treeFindPath(tree, func, key, children);
};
