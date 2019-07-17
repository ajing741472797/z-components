<template>
    <button class="z-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <z-icon class="icon"  v-if="!loading && icon" :name="icon"></z-icon>
        <z-icon class="loading" v-if="loading" name="loading"></z-icon>
        <div class="content">
        <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    // props: ['icon','iconPosition']//写法一
    props:{
        icon:{},
        loading:{
            type:Boolean,
            default:false
        },
        iconPosition:{
            type:String,
            default:'left' ,//默认值left
            validator(value){
             return value === 'left' || value ==='right'
            } //属性检查器
        }

    }//写法
}
</script>

<style lang="scss">
        @keyframes spin{
            0% {transform: rotate(0deg)}
            100%{transform: rotate(360deg)}
        }
 .z-button{
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle; // css遇到上下不对齐的情况，更改这个属性可以解决

        &:hover{
            border-color: var(--border-color-hover)
        }
        &:active{
            background: var(--button-active-bg)
        }
        &:focus{
            outline: none
        }
        > .content{
            order: 2
        }
        > .z-icon{
            margin-right: .2em;
            order: 1
        }

        &.icon-right{
            > .content{
                order: 1
            }
            > .z-icon{
                margin-right: 0;
                margin-left: .2em;
                order:2
            }
        }
         .loading{
            animation: spin 2s infinite linear;
        }
        }



        


</style>

