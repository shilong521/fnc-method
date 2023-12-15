/**
 * 筛选出来符合条件的树形结构
 * @readme tree:树形结构，func:满足条件的回调函数，children:子节点的key
 * @default children='children'
 */

export const treeFilter = <T extends Record<string, any>>(
  tree: T[],
  func: (data: T) => boolean,
  children: string = 'children'
) => {
  return tree
    .map((node) => ({ ...node }))
    .filter((node) => {
      (node as Record<string, any>)[children] =
        node[children] && treeFilter(node[children], func);
      return func(node) || (node[children] && node[children].length);
    });
};
