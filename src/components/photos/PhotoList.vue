
<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                  <!--  <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>-->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>

        <ul class="photo-list">
            <router-link v-for="item in list":key="item.id" :to="'/home/Photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url" >
                <div class="info">
                    <h1 class="info-title"> {{item.title}}  </h1>


                        <div class="info-body">
      {{item.zhaiyao}}
                  </div>


                </div>
            </router-link>
        </ul>
    </div>
    <!--<someComponent></someComponent>-->
</template>
<script>
    import "J:/webpack_demo/src/lib/mui/js/mui.js"
    //import someComponent from './someComponent'

    export default {
        data() {

            return {  cates:[],
                list:[]
            }
        },
        created(){
            this.getAllCategory();
            this.getPhotoListByCateId(0);
        },
      mounted(){

              mui('.mui-scroll-wrapper').scroll({
                  deceleration:0.0005
              })

      },
     methods:{
         getAllCategory(){
             this.axios.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
                 console.log(result);
                 /*       this.cates =  this.cates.concat(result.body.message);*/
                this.cates = result.data.message;
                var pmt={
                    title:'全部',
                    id:'0'
                };
                this.cates.unshift(pmt);



             })
         },
         getPhotoListByCateId(cateid){
            this.axios.get('http://www.liulongbin.top:3005/api/getimages/'+cateid).then(result=>{
                console.log(this.cates);
                console.log("next");
                console.log(result);
                if(result.data.status===0){
                    this.list =result.data.message;
                }


            })
         }

     },

    }
</script>

<style lang="scss" scoped>
/*    *{ touch-action: pan-y; }*/

    .photo-list{
        margin: 0;
        padding: 10px;

        padding-bottom: 0px;
        li{
            list-style: none;
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 6px #999;
            position: relative;

            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                position: absolute;

                color: white;
                background-color: rgba(0,0,0,.4);
                text-align: left;
                max-height: 84px;
                bottom: 0px;
                .info-title{
                    font-size: 14px;



                }
                .info-body{

                    font-size: 13px;


                }
            }

        }
    }
</style>
