import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuiltEnv } from './config/build/types/config';

export default (env: BuiltEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const config: webpack.Configuration = buildWebpackConfig({
        mode, paths, isDev, port, apiUrl,
    });

    return config;
};

// "start": "cross-env mode=development webpack serve",
//     "build:prod": "cross-env mode=production webpack",
//     "build:dev": "cross-env mode=development webpack",
