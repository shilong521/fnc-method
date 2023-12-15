import pkg from './package.json';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const name = 'longFncMethod';
const extensions = ['.js', '.ts'];
export default {
  input: 'src/index.ts',
  output: {
    file: pkg.module,
    format: 'esm',
    name,
  },
  plugins: [
    commonjs(),
    peerDepsExternal(),
    json({
      compact: true,
      indent: '  ',
      preferConst: true,
    }),
    terser(), // 压缩 js
    visualizer(), //查看打包体积,
    typescript(),
    nodeResolve({
      browser: true, 
      mainFields: ['module', 'main'],
      extensions,
    }),
  ],
};
