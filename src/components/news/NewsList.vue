<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for=" item in NewList":key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url" >
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>{{item.add_time|dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>

        </ul>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                NewList:[

                ]
            }
        },
        created(){
            this.getNewlist();
        },
        methods:{
            getNewlist(){
                this.axios.get('http://www.liulongbin.top:3005/api/getnewslist').then(result => {
                        this.NewList = result.data.message;
                        console.log(this.NewList);
                    }
                )
            }
        }
    }

</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h4{
                font-size:14px;

            }.mui-ellipsis{
            font-size:12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
                         }
        }
    }
</style>
