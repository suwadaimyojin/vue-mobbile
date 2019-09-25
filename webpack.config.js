
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
module.exports={
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
       path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        port:8080,
        contentBase:'src',
        hot:true
    },
    plugins:[//配置插件的节点
  /*    new  webpack.HotModuleReplacementPlugin()*/
/*     new VueLoaderPlugin();*/
     new VueLoaderPlugin()

    ],
    module:{
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader*/
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
        ]
    },
    resolve:{
         alias:{
     "vue$":"vue/dist/vue.js"
         }
    }

}
