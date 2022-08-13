const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const { webpack } = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            cacheGroups: {
                styles: {
                  name: "index",
                  type: "css/mini-extract",
                  chunks: "all",
                  enforce: true,
                },
            },
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filenameJs = (ext) => isDev ? `js/[name].${ext}` : `js/[name].[contenthash].${ext}`;
const filenameCss = (ext) => isDev ? `css/[name].${ext}` : `css/[name].[contenthash].${ext}`; 

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                esModule: isProd,
                emit: true,
            },
        },
        "css-loader",
        "postcss-loader",
        "sass-loader",
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders;
}


const plugins = () => {
    const base = [
        new HtmlWebpackPlugin({
            template: "./pug/pages/index.pug",
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/logo.jpg"),
                    to: path.resolve(__dirname, "dist/assets"),
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filenameCss("css"),
            linkType: "text/css",
        }),
    ]

    if (isDev) {
        base.push(new webpack.HotModuleReplacementPlugin)
    }

    return base;
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./index.js"],
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: filenameJs("js"),
        clean: true,
    },
    resolve: {
        extensions: [".js", ".pug", ".css", ".less", ".scss", ".json", ".png", ".jpg", ".svg", ".icon", ".gif", ".html"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },
    optimization: optimization(),
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 9094,
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: cssLoaders(),
            },
            {
                test: /\.(less)$/,
                use: cssLoaders("less-loader"),
            },
            {
                test: /\.(s[ac]ss)$/,
                use: cssLoaders("sass-loader"),
            },
            {
                test: /\.(?:jpg|jpeg|gif|png|ico|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(?:ttf|woff2|eot|otf)$/i,
                type: "asset/inline",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    },
                },
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "pug-loader",
                    options: {
                        pretty: isDev,
                    },
                },
            },
            {
                test: require.resolve("jquery"),
                use: {
                    loader: "expose-loader",
                    options: {
                        exposes: ["$", "jquery"],
                    },
                },
            },
        ],
    },
};