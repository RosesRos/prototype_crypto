module.exports = {
    plugins: [
        require("autoprefixer"),
        [
            "postcss-preset-env",
            {
                browser: "last 4 versions",
            }
        ]
    ]
}
