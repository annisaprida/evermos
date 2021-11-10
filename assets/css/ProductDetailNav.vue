<template>
   <nav class="product__detail__nav">
        <nuxt-link to='/'><span class="icon-arrow"></span></nuxt-link>
        <button><span class="icon-cart"></span></button>
        <button><span class="icon-share"></span></button>
    </nav>
</template>

<style lang="scss" scoped>
  .product__detail{
    &__nav{
      position: absolute;
      top: 10px;
      width: 100%;
      padding: 0 10px;
      [class^="icon-"]{
          color: #fff;
          background: #68696d;
          border-radius: 3px;
          font-size: 18px;
          padding: 2px;
        }
        button{
          float: right;
          background: none;
          border: none;
          width: initial;
        }
        .icon-cart{
          margin-left: 10px;
        }
    }
  }
</style>