module.exports = function(grunt) {
    var webpack = require('webpack');
    var path = require('path');

    // Task configuration
    var config = {
        pkg: grunt.file.readJSON('package.json'),
 
        // Build scripts
        webpack: {
            dev: {
                entry: {
                    'main': './src/main.ts',
                    'vendor': './src/vendor.ts'
                },
                output: {
                    path: "./src/app/scripts",
                    filename: "bundle.js"
                },
                plugins: [
                    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
                ],
                resolve: {
                    extensions: ['', '.ts', '.js']
                },
                module: {
                    loaders: [
                        {
                            test: /\.ts$/,
                            exclude: /node_modules/, 
                            loader: 'ts-loader'
                        },
                    ],
                    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
                },
                devServer: {
                    historyApiFallback: true
                },
                watch: true,
                keepalive: true
            },
 
        },

        // Create connection on port
        connect: {
            dev: {
                options: {
                    port: 9001,
                    base: 'src',
                    livereload: true
                }
            }
        },

        // Start browser
        open: {
            dev: {
                path: 'http://127.0.0.1:9001/'
            },
        },

        // Start watch tasks
        watch: {
            options: {
                interrupt: true,
                livereload: 9001,
                spawn: true
            },
            dev: {
                files: ['**/*.ts'],
                tasks: ['webpack:dev']
            }
        },

        // Watch tasks concurrently
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watch: ['watch:dev', 'webpack:dev']
        },
    }

    return config;
};