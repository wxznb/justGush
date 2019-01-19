"use strict"
const path = require("path");
const config = require("../config");

var webpack = require("webpack");

const __ENV = process.env.NODE_ENV;
var isProduction = __ENV === "production";
var publicPath = isProduction ?
                    config.pro.publicPath :
                    config.dev.publicPath;

const mainPath = resolve("./src");

module.exports = {
    content: path.resolve(__dirname, ""),
    entry: {
        app: ""
    },
    output: {
        path: "",
        filename: "[name].js",
        publicPath
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: "babel-loader"
            },
            preset: [
                "env",
                "react"
            ],
            include: [
                mainPath
            ]
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ],
            include: [
                mainPath
            ]
        }]
    }
};
