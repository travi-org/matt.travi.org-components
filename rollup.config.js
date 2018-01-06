/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  sourcemap: true,
  external: [
    'react',
    'prop-types',
    'material-ui'
  ],
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true
    }),
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [['env', {targets: {node: 'current', browsers: ['last 2 versions']}, modules: false}], 'react'],
      plugins: [['transform-react-remove-prop-types', {mode: 'wrap'}]]
    })
  ],
  output: [
    {file: 'lib/components.cjs.js', format: 'cjs'},
    {file: 'lib/components.es.js', format: 'es'}
  ]
};
