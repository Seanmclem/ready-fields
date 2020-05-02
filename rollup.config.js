import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer';
// import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './index.ts',
    output: [
        {
            file: './index.cjs.js',
            format: 'cjs'
        },
        {
            file: './index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        typescript({ target: "es6" }),
        external(),
        postcss(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        image(),
        visualizer()
    ]
};