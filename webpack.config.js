module.exports = {
    entry: {
        main: './src/main.ts',
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