<template>
  <div id="app">
    <!-- 使用子组件 -->
     <v-header  :seller="seller"></v-header>
     <div class="tab">
       <div class="tab-iteam"><router-link   to="/goods">商品</router-link></div>
       <div class="tab-iteam"><router-link   to="/ratings">评论</router-link></div>
       <div class="tab-iteam"><router-link   to="/seller">商家</router-link></div>
     </div>
      <router-view></router-view>
     <div class="footer">footer</div>
  </div>
</template>
<script>
// 引入子组件代码
import header from './components/sub/header/header.vue'
const ERR_OK = 0;
export default{
  // 注册子组件
  data(){
     return{
       seller:{}
     }
  },
  created(){
     this.$http.get('/api/seller').then((reponse)=>{
       reponse = reponse.body;
      //  console.log(reponse);
       if( reponse.errno === ERR_OK){
           this.seller = reponse.data;
           console.log(this.seller)

       }
     })
  },
  components :{
    'v-header':header
  }
}
</script>
<style lang="scss">
 $primary-color: red;
   #app {
        color: $primary-color;
        .tab{
          display: flex;
          width: 100%;
          height: 40px;
          line-height: 40px;
          .tab-iteam{
            flex:1;
            text-align: center;
            &>a{
              display: block;
              color: red;

            }
            .router-link-active{
              color: yellow;
            }
          }
        }
       }
.clearfix{
  display: inline;
  &:after{
    display: block;
    content: '.';
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;

  }
}
</style>
