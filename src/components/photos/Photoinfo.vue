<template>
   <div class="photoinfo-container">
       <h3>{{photoinfo.title}}</h3>
       <p class="subtitle">
           <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
           <span>点击：0次{{photoinfo.click}}</span>
       </p>
       <hr>
       <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">

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
           photoinfo:[],
           list:[]
       };
    },
    created(){
        this.getPhotoinfo();

        this.getThumbs();

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
          },
        getThumbs(){
              this.axios.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
                    if(result.data.status===0){
                        result.data.message.forEach(item=>{
                            item.w=600;
                            item.h=400;
                        })
                    };
                  this.list = result.data.message;
              });

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

        .preview-img{
            margin: 10px;
            box-shadow: 0 0 8px #999;
        }
        .thumbs{
            img{

            }
        }
    }
</style>