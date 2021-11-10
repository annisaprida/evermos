
<template>
  <div class="bottomSheet">
      <div @click=onClose class="bottomSheet__overlay"></div>
      <div class="bottomSheet__content">
        <slot name="body"></slot>
      </div>
  </div>
</template>
<script src="./js/bottom-sheet.js"></script>
<style lang="scss" scoped>
.bottomSheet{
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    &__overlay{
        background-color: rgba(0, 0, 0, 0.85);
        opacity: 1;
        height: 100vh;
        width: 100vw;
    }
    &__content{
        z-index: 2;
        background: #fff;
        position: absolute;
        bottom: -83px;
        padding: 10px;
        width:100%;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        -webkit-animation: slide 0.5s forwards;
        animation: slide 0.5s forwards;
    }
}
@keyframes slide {
    100% { bottom: 0; }
}
</style>