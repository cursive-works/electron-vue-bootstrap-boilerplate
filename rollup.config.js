import vue from 'rollup-plugin-vue2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';

export default {
  input: 'renderer/renderer.js',
  output: {
    file: 'dist/renderer.bundle.js',
    compact: true,
  },
  plugins: [
      vue({'css': 'none'}),
      nodeResolve(),
      replace({
          preventAssignment:true,
          'process.env.NODE_ENV': JSON.stringify('production'),
          'process.env.VUE_ENV': JSON.stringify('electron')
      }),
      scss(),
  ],
};
