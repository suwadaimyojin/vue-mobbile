//入口文件
import Vue from 'vue'
import App from './App.vue'
/*import VueResource from 'vue-resource'*/
import router from './router.js'
import Router from 'vue-router'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import VuePreview from 'vue-preview'
/*import  {Header,Button,Lazyload,Tabbar, TabItem,Swipe, SwipeItem} from 'mint-ui'*/
import 'J:/webpack_demo/src/lib/mui/css/mui.min.css'
import 'J:/webpack_demo/src/lib/mui/css/icons-extra(1).css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/header/style.css'
import 'J:/webpack_demo/node_modules/mint-ui/lib/tabbar/style.css'

Vue.use(VuePreview)


Vue.use(MintUI);
/*Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header);
Vue.use(Lazyload);*/
Vue.use(Router);


Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)

})
/*Vue.use(VueResource)*/

Vue.use(VueAxios,axios)
Vue.axios.options.root ='http://www.liulongbin.top:3005';
Vue.axios.options.emulateJSON =true;

var vm =new Vue({
    el:'#app',
    render: c=>c(App),
    router:router
})
