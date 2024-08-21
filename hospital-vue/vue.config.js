
module.exports = {
    lintOnSave: false, // 关闭eslint校验
    devServer: {
        host: "localhost",
        port: 8089,
        https: false,
        proxy: "http://localhost:9999",
        overlay: { // 关闭eslint校验
            warning: false,
            errors: false
        },
    }
}
//设置代理解决跨域问题