<template>
    <div class="detail-page">
        <section class="product__detail">
            <nav class="product__detail__nav">
                <nuxt-link to='/'><span class="icon-arrow"></span></nuxt-link>
                <button><span class="icon-cart"></span></button>
                <button><span class="icon-share"></span></button>
            </nav>
            <button class="product__detail__image" @click="toggleModal(true)">
              <img
                alt="product"
                src="~assets/images/placeimg_300_160.jpg"
                width="300"
                height="160"
            /></button>
            <modal v-if="isVisibleModal" @onClose="toggleModal(false)">
               <template v-slot:body><img src="~assets/images/placeimg_300_160.jpg"></template>
            </modal>
            <div class="product__detail__content">
                <div class="product__detail__content__left">
                    <h1>
                        <div class="product__item__title">1000 Apex Coins</div>
                        <div class="product__item__subtitle">Apex Legends PC</div>
                    </h1>
                    <div class="product__item__price">Rp 100.000</div> <span>per 1 top up</span>
                    <span class="product__item__discount__amount">99%</span>
                    <span class="product__item__discount__list-price">Rp200.000</span>
                </div>
                <div class="product__detail__content__right">
                    <button class="product__detail__content__add-to-wishlist" @click="showToast('wishlist')">
                        <span class="icon-heart"></span>
                    </button>
                </div>
                <Toast v-if="isVisibleToast">
                   <template v-slot:body>
                       {{isWishlistToast?"Added To Wishlist":"Added to Cart"}}
                   </template>
                </Toast>
            </div>
        </section>
        <section class="product__detail__content">
            <div class="product__detail__description">
                <h2>Deskripsi Produk</h2>
                <p>Deskripsi produk mobile legends dari toko UlalaShop yang paling termurah dan terbaik juga terlengkap</p>
                <button @click="toggleBottomSheet(true)" class="product__detail__description__see-more">Selengkapnya</button>
                <BottomSheet v-if="isVisibleBottomSheet" @onClose="toggleBottomSheet(false)">
                   <template v-slot:body><h2>Deskripsi Produk</h2><p>Deskripsi produk mobile legends dari toko UlalaShop yang paling termurah dan terbaik juga terlengkap. Deskripsi ini untuk versi lengkap dan panjang di bottomsheet</p></template>
                </BottomSheet>
            </div>
        </section>
        <section class="product__detail__content">
            <h1>Pengiriman Tercepat</h1>
            <p>Produk dari penjual-penjual yang memberi Garansi pengiriman 10 menit</p>
            <product-item-list/>
        </section>
        <add-to-cart-button @showToast="showToast('cart')"/>
    </div>
</template>
<script src="./js/detail.js"></script>

<style lang="scss" scoped>
.detail-page {
    background: #f4f4f4;
    min-height: 100vh;
}
.product__detail{
    position: relative;
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
    &__loading{
        height: 100%;
        background: #ccc;
    }
    button{
        border: none;
        background: none;
    }
    &__image{
        width: 100%;
    }
    &__content{
        padding: 10px;
        position: relative;
        overflow: auto;
        margin-bottom: 10px;
        background: #fff;
        &__left{
            float: left;
            h1{
                margin-top: 0;
            }
        }
        &__right{
            float: right;
        }
        &__add-to-wishlist{
            font-size: 16px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            &:active .icon-heart{
                padding: 5px;
                color: #fff;
                background: #f28c8c;
                transition: 0s;
                border-radius: 100%;
              }
        }
    }
    &__description {
        font-size:12px;
        p{
            display: -webkit-box;
           overflow: hidden;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
         }
         &__see-more{
            color: #5696e7;
            font-weight: bold;
            margin-top: 5px;
            float: right;
            border: none;
            background: none;
        }
    }
}
</style>