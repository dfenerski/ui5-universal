const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: { task: './src/task.ts', server: './src/server.ts' },
    output: {
        path: path.resolve(__dirname, 'dist', 'src'),
        filename: '[name].js',
        clean: true,
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@ui5-universal/core': path.resolve(__dirname, '../core/src'),
        },
    },
    externals: [
        nodeExternals({
            modulesDir: path.resolve(__dirname, '../../node_modules'),
            allowlist: ['@ui5-universal/core'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
