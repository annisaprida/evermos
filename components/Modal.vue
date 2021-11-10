<template>
  <div class="modal">
    <div class="modal__content">
      <div @click="onClose" class="modal__overlay"></div>
        <div class="modal__content__container">
          <slot name="body"></slot>
        </div>
      </div>
  </div>
</template>
<script src="./js/modal.js"></script>

<style lang="scss" scoped>
.modal{
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
        position: relative;
        height: 100vh;
        width: 100vw;
        &__container{
            z-index: 2;
            position: absolute;
            padding: 20px;
            width: 90%;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
            animation: slide 0.5s forwards;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
       
    }
}
@keyframes slide {
    100% { bottom: 0; }
}
</style>