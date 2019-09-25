import VueRouter from 'vue-router'

import HomeContainer from './tabbar/HomeContainer.vue'
import MemberContainer from './tabbar/MemberContainer.vue'
import ShopcarContainer from './tabbar/ShopcarContainer.vue'
import SearchContainer from './tabbar/SearchContainer.vue'


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

        },
    ]
})
export default router