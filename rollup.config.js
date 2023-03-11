import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/http-response-error.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/http-response-error.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/http-response-error.umd.js',
      format: 'umd',
      name: 'HttpResponseError',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
