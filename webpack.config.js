const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
            },
        ],
    }
};