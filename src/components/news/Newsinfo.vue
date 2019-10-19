<template>
<div class="newsinfo-container">

    <h3 class="title">{{newsinfo.title}}</h3>
    <p>
        <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
        <span>点击次数：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
     <comment-box :id="this.id"></comment-box>
</div>

</template>

<script>
  import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
         id:this.$route.params.id,
            newsinfo:[]
        }
    },
    created(){
        this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
            this.axios.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
                this.newsinfo = result.data.message[0];
                console.log(this.newsinfo);
                console.log("执行到这里了!")
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style>

</style>
