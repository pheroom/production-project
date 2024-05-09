import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
            __API__: JSON.stringify(options.apiUrl),
            __PROJECT__: JSON.stringify(options.project),
        }),
    ];

    if (options.isDev) {
        plugins.push(
            new ReactRefreshPlugin(),
            new BundleAnalyzerPlugin({ openAnalyzer: false }),
        );
    }

    return plugins;
}
