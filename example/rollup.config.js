import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript';
import typescript from 'typescript';

export default {
    input: 'example/index.ts',
    output: {
        file: 'example/bundle.js',
        format: 'iife'
    },
    plugins: [
        resolve({jsnext: true}),
        rollupTypescript({
            typescript: typescript

        }),
        babel({
            babelrc: false,
            exclude: [
                'node_modules/**',
                'src/**',
                'lib/**'
            ],
            presets: [
                ["env", {modules: false}]
            ]
        })
    ]
};