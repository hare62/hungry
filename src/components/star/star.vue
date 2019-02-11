<template>
  <div class="star" >
     <div class="star-item " :class="starType" >
           <span v-for=" (itemClass,index) in itemClasses" :class="itemClass"  :key="index" class="star-item"></span>
    </div>
  </div>
</template>
<script >
const LENGTH = 5
const CLS_ON = "on"//全星
const CLS_HALF = "half"//半星
const CLS_OFF = "off"//灰星
export default{
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    computed:{
        starType(){
            return 'star-'+ this.size
        },
        itemClasses(){
            let result=[]
            let score=Math.floor(this.score*2)/2 //向下取0.5的倍数
            let hasDecimal = score%1 !==0   //判断有没有小数部分，
            let integer = Math.floor(score)  //判断整数部分，全星
            //判断放全星
            for(let i=0; i<integer;i++){
                result.push(CLS_ON)
            }
            // 判断要不要添加半颗星
            if(hasDecimal){
                result.push(CLS_HALF)
            }
            // 将剩余的不亮的星星填满
            while(result.length<LENGTH){
                result.push(CLS_OFF)
            }
            return result
        }
    }
};
</script>

<style lang='scss' lang='stylus' rel="stylesheet/stylus" >
@import '../../common/stylus/mixin.styl'
border-1px($color)
  position : relative
  &:after
    display: block
    position: absolute
    left: 0
    bottom: 0
    border-top 1px solid $color
    width: 100%
    content: ''

border-none()
  &:after
    display: none

bg-image($url)
  background-image url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
    background-image url($url + "@3x.png")


.star
    font-size:0
    .star-item
        display: inline-block
        background-repeat:no-repeat
        &.star-48
            .star-item
                width:20px
                height:20px
                margin-right:22px
                background-size:20px 20px
                &:last-child
                    margin-right:0
                &.on
                    bg-image('star48_on')
                &.off
                    bg-image('star48_off')
                &.half
                    bg-image('star48_half')
        &.star-36
          .star-item
            width 15px
            height 15px
            margin-right 3px
            background-size 15px 15px
            &:last-child
              margin-right 0
            &.on
              bg-image('star36_on')
            &.half
              bg-image('star36_half')
            &.off
              bg-image('star36_off')
        &.star-24
          .star-item
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            &:last-child
              margin-right 0
            &.on
              bg-image('star24_on')
            &.half
              bg-image('star24_half')
            &.off
              bg-image('star24_off')
</style>

