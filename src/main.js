//入口文件
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router.js'
import Router from 'vue-router'
import moment from 'moment'

import  {Header,Button} from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import 'J:/webpack_demo/src/lib/mui/css/mui.min.css'
import 'J:/webpack_demo/src/lib/mui/css/icons-extra(1).css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/header/style.css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/tabbar/style.css'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Router)
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)

})
Vue.use(VueResource)

Vue.http.options.root ='http://www.liulongbin.top:3005';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header)
var vm =new Vue({
    el:'#app',
    render: c=>c(App),
    router:router
})
