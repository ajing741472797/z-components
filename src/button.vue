<template>
    <button class="z-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
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
        iconPosition:{
            type:String,
            default:'left' //默认值left
        }

    }//写法
}
</script>

<style lang="scss">
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
        > .icon{
            margin-right: .1em;
            order: 1
        }

        &.icon-right{
            > .content{
                order: 1
            }
            > .icon{
                margin-right: 0;
                margin-left: .1em;
                order:2
            }
        }
        }

</style>

