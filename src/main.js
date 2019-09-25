//入口文件
import Vue from 'vue'
import App from './App.vue'
 import  {Header} from 'mint-ui'
import Router from 'vue-router'
import { Tabbar, TabItem } from 'mint-ui';
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui';
import 'J:/webpack_demo/src/lib/mui/css/mui.min.css'
import 'J:/webpack_demo/src/lib/mui/css/icons-extra(1).css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/header/style.css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/tabbar/style.css'
import VueResource from 'vue-resource'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router)
Vue.use(VueResource)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header)
var vm =new Vue({
    el:'#app',
    render: c=>c(App),
    router:router
})
