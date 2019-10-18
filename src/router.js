import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
var router =new VueRouter({
    routes:[
      { path:'/home',
            component: HomeContainer

        },
        { path:'/member',
            component: MemberContainer

        },
        { path:'/shopcar',
            component: ShopcarContainer

        }, { path:'/search',
            component: SearchContainer

        },{
        path:'/home/newslist',
            component:NewsList
        }, {
            path:'/home/newsinfo/:id',
            component:Newsinfo
        }
    ]
})
export default router