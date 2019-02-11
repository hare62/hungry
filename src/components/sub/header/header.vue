<template>
   <div class="header" >
     <div class="content-wrapper">
      <div class="avater">
          <img :src="seller.avatar" width="64px" height="64px" alt="">
      </div>
      <div class="content">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}
         </div>
         <div v-if="seller.supports" class="support">
           <span class="icon"></span>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
      </div>
      <div class="support-count" @click="showDetail">5个<i class="el-icon-arrow-right"></i> </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper  clearfix">
        <div class="detail-main">
         <h1 class="name">{{seller.name}}</h1>
         <div class="star-wrapper">
           <star :size="48" :score="seller.score"></star>
         </div>
         <div class="title">
           <div class="line"></div>
           <div class="text">优惠信息</div>
           <div class="line"></div>
         </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="el-icon-close"></i>
      </div>
    </div>
   </div>
</template>
<script>
import star from '../../star/star.vue'
import split from '../../sub/split/split.vue'
export default {

   data(){
     return {
       detailShow:false,
     };
   },
   methods:{
      showDetail(){
        this.detailShow = true;
      }
   },
   created(){
       this.classMap = ['decrease','discount','special','invoice','guarantee'];
   },

   props:{
     seller:{
       type:Object,
     }
   },
   mounted(){
    //  console.log(seller)
   },
   components:{
     star,
     split
   }
}
</script>
<style  lang='scss' lang="stylus"  rel="stylesheet/stylus">
.clearfix{
  display: inline-block;
  &:after{
    display: block;
    content: '.';
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;

  }
}

 .header{
      overflow: hidden;
      position: relative;
      background: rgba(7,17,27,0.5);
      .content-wrapper {
      padding: 24px 12px 18px 24px;
      position: relative;
      .avater {
      display: inline-block;
      border-radius: 4px;
      vertical-align: top;
          img {
          border-radius: 2px;
            }
      }
      .content {
        display: inline-block;
        margin-left: 14px;
            .title {
            font-size: 16px;
            color: #fff;
            line-height: 18px;
            font-weight: bold;
            margin-bottom: 8px;
            }
            .description {
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 12px;
            color: #fff;
            font-weight: 200;
            }
            .support {
            font-size: 10px;
            line-height: 28px;
            color: #fff;
            font-weight: 200;
            }
      }
      .support-count {
            position: absolute;
            right: 12px;
            bottom: 20px;
            height: 21px;
            width: 50px;
            border-radius: 10px;
            text-align: center;
            color: #fff;
            background-color: rgba(255, 55, 255, 0.2);
            font-size: 12px;
            line-height: 21px;
          }
      }
       .bulletin-wrapper {
            background: rgba(7,17,27,0.2);
            height: 28px;
            overflow: hidden;
            line-height: 28px;
            padding: 0 12px 0 12px;
            font-size: 10px;
            color: white;
            font-weight: 200;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            .el-icon-arrow-right{
            position: absolute;
            top: 7px;
            right: 4px;
            height: 15px;
            width: 15px;
            }
            }
      .background {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          top: 0;
          right: 0;
          filter: blur(10px);
        }
      .detail{
        position: fixed;
        background: rgba(7,17,27,.8);
        z-index: 100;
        top:0;
        left: 0;
        overflow: auto;
        width:100%;
        height:100%;
        .detail-wrapper{
          min-height: 100%;
          width: 100%;
          .detail-main{
            margin-top:64px;
            padding-bottom: 64px;
            .name{
              font-size: 16px;
              font-weight: 700;
              line-height: 16px;
              color: #fff;
              text-align: center;
            }
            .star-wrapper{
              margin-top:18px;
              padding: 2px 0;
              text-align: center;
            }
            .title {
              display: flex;
              width: 80%;
              margin: 30px auto 24px auto;
              .line {
                flex: 1;
                position: relative;
                top: -6px;
                border-bottom: 1px solid rgba(255,255,255,.2);
               }
              .text{
                padding: 0 12px;
                font-size: 14px;
                color:white;
              }
            }
            // .supports{
            //   width: 80%;
            //   margin: 0 auto;
            //   .support-item{
            //     padding:  0 12px;
            //     margin-bottom: 12px;
            //     font-size: 0;
            //     &:last-child{
            //       margin-bottom: 0;
            //     }
            //     .icon{
            //       display: inline-block;
            //       width: 16px;
            //       height: 16px;
            //       vertical-align: top;
            //       margin-right: 6px;
            //       background-size: 16px 16px;
            //       background-repeat: no-repeat;
            //       &.decrease
            //         bg-image('decrease_2')
            //       &.discount
            //         bg-image('discount_2')
            //       &.guarantee
            //         bg-image('guarantee_2')
            //       &.invoice
            //         bg-image('invoice_2')
            //     }
            //   }
            // }
          }
        }
        .detail-close{
            position: relative;
            width:32px;
            height: 32px;
            margin:-64px auto 0 auto;
            clear:both;
            font-size: 32px;
            i.el-icon-close {
            color: white;
            }
        }
       }
  }
</style>
