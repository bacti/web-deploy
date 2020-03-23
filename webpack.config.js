const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

let nodeModules = {}
try
{
    fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1)
      .forEach(mod => { nodeModules[mod] = 'commonjs ' + mod })
}
catch (exception) {}

module.exports =
{
    entry: './src/Server.js',
    target: 'node',
    output:
    {
        path: __dirname,
        filename: 'GameServer.js'
    },
    externals: nodeModules,
    plugins:
    [
        new UglifyJSPlugin(),
    ],
}
