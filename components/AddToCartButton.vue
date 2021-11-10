<template>
  <section class="container">
    <button 
      @click=showToast 
      class="container__button">
      Tambah ke troli
    </button>
  </section>
</template>
<style lang="scss" scoped>
.container{
    text-align: center;
    border-top: 1px solid #ddd;
    width: 100%;
    background: #fff;
    padding: 10px 0;
    &__button{
        background: #ef6000;
        width: 90%;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        border: none;
        &:active{
            transform: scale(1.05);
            transition: 0.2s transform ease-in-out;
        }
    }
}
</style>
<script src="./js/add-to-cart.js"></script>