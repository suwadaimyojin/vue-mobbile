<template>
   <div class="photoinfo-container">
       <h3>{{photoinfo.title}}</h3>
       <p class="subtitle">
           <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
           <span>点击：0次{{photoinfo.click}}</span>
       </p>
       <hr>

       <div class="content" v-html="photoinfo.content">

       </div>
       <cmt-box :id="id"></cmt-box>
   </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
export default {

    data(){
       return {
           id:this.$route.params.id,
           photoinfo:[]
       };
    },
    created(){
        this.getPhotoinfo();

    },
    methods:{
          getPhotoinfo(){
              this.axios.get('http://www.liulongbin.top:3005/api/getimageinfo/'+this.id ).then(result=>{
                  console.log("憨批");
                  console.log(result);

                  if(result.data.status===0){
                   this.photoinfo = result.data.message[0]
                  }
              })
          }
    },
    components:{
        'cmt-box':comment
    }

}
</script>

<style lang="scss" scoped>
    .photoinfo-container {
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }

        .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>