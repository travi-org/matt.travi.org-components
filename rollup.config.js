/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.js',
  plugins: [
    autoExternal(),
    nodeResolve({
      module: true,
      jsnext: true
    }),
    json(),
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [
        ['@babel/preset-env', {targets: {node: 'current', browsers: ['last 2 versions']}, modules: false}],
        '@babel/react'
      ],
      plugins: [['transform-react-remove-prop-types', {mode: 'wrap'}]]
    })
  ],
  output: [
    {file: 'lib/components.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/components.es.js', format: 'es', sourcemap: true}
  ]
};
