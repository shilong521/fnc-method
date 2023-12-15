# @shilong521/fnc-method

<!-- Badge -->

## 介绍

js/ts 通用方法库。

## 安装

```shell
yarn add @shilong521/fnc-method
# 或者npm install @shilong521/fnc-method --save

```

2. 按需导入方法

```ts
import { getUrlSearchValueByKey } from '@shilong521/fnc-method';
```

## Table of Contents

- String

  - stringIsNumberAll （判断 string 是否都是数字\d,[0-9]）
  - stringTrimBlank （过滤 string 中所有的空格）

- Number

  - numInRange （判断一个数字是否在指定范围内,包括 start，不包过 end，如果指定 start=null 那么就是 num<end，end=null 就是 num>=start）

- Array

  - arrayOmitFake （过滤 array 中的假值 （null、""、undefind、{}、[]））

- Object

  - objOmitFake （过滤 object 中的假值 （null、""、undefind、{}、[]））

- UrlSearch

  - getUrlSearchValueByKey （通过 key 获取 urlSeach 参数的 value）

- Tree

  - treeFind 查找树形节点
  - treeFilter 筛选出来符合条件的树形结构
  - [treeFindPaths](#treeFindPaths) 查找树形节点路径

- Is

  - isString
  - isNumber
  - isNull
  - isUndefined
  - isArray
  - isDev
  - isFake （判断是不是假值 （null、""、undefind、{},[]））

# treeFindPaths

```ts
import { treeFindPaths } from '@shilong521/fnc-method';

const treeData = [
  {
    id: '1',
    name: '1-c',
    children: [
      {
        id: '1-1',
        name: '1-1-c',
        children: [{ id: '1-1-1', name: '1-1-1-c' }],
      },
      { id: '1-2', name: '1-2-c' },
    ],
  },
  {
    id: '2',
    name: '2-c',
    children: [{ id: '2-1', name: '2-1-c' }],
  },
];

console.log(
  treeFindPaths(treeData, (data) => data.id === '1-1-1', 'id', 'children'), //[ '1', '1-1', '1-1-1' ]
  treeFindPaths(treeData, (data) => data.id === '2-1', 'name') // [ '2-c', '2-1-c' ]
  treeFindPaths(treeData, (data) => data.id === '2-3', 'id') // []
);
```
