"use strict"
const merge = require("webpack-merge");
const proEnv = require("./pro.config.js");

module.exports = merge(proEnv, {
    NODE_ENV: "'develop'"
})
