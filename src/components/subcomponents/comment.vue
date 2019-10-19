<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg" @keyup="text"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    <!--{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}-->
                    {{item.content}}
                </div>
            </div>

        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
    </template>
<script>
export  default {
    data(){
        return {
            pageindex:1,
            msg:"",
            comments: []//所有的评论数据
        }
    },
    created(){
        this.getComments();
},
    methods:{
        text(){
            console.log(this.msg);
            console.log(typeof this.msg)
        },
        getComments(){
            this.axios.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(result=>{


                for ( let i in result.data.message){
                    this.comments.push(result.data.message[i]);
                }

                console.log(result);
                console.log("执行了getComments");
                console.log(result.data.message[0].content);
                console.log(this.comments);
            })
        },
        getMore(){
            this.pageindex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim().length===0){
                return alert("评论内容不能为空！")
            }
            console.log("comments:"+this.comments+"___________msg:"+this.msg);
            this.axios.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}).then(result=> {
                console.log(result);
                if(result.data.status===0){
                    console.log("执行了getComment");
                    console.log("comments:"+this.comments+"___________msg:"+this.msg);
                    var cmt ={
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    };
                    this.comments.unshift(cmt);
                    this.msg='';
                    this.getComments();
                }
            });

        }
    },
    props:['id']
}

</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
