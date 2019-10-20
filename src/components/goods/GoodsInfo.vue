<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList":key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>

    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
export  default {
    data(){
        return{
            id:  this.$route.params.id,
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.axios.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
                console.log("进来了")
                if(result.data.status===0){
                    console.log("成功了");
                    this.lunbotuList = result.data.message;
                    console.log(this.lunbotuList);
                }
            })
        }
    }
}
</script>

<style lang="scss"scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: darkcyan;
            }
            img{
                width: 100%;
                height: 100%;
            }

        }


    }
</style>
