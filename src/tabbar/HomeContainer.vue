
<template>
  <div>

      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in lunbotuList":key="item.url">
              <img :src="item.img" alt="">
          </mt-swipe-item>
      </mt-swipe>

  </div>
</template>

<script>
export default {

    data(){
        return {
            lunbotuList:[]
        }
    },

    created(){
this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                    this.lunbotuList = result.body.message;
                }
               )
        }
    }
}
</script>

<style lang="scss" scoped>
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
