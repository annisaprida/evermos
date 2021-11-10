<template>
  <ul class="product">
      <li class="product__item">
        <nuxt-link to='/detail'>
          <img
            alt="product"
            src="~assets/images/placeimg_300_160.jpg"
            width="150"
            height="80"
          />
          <div class="product__item__content">
            <div class="product__item__title">1000 Apex Coins</div>
            <div class="product__item__subtitle">Apex Legends PC</div>
            <div class="product__item__stock">Stock 999+</div>
            <span class="product__item__discount__amount">99%</span>
            <div class="product__item__price">Rp 100.000</div>
             <div class="product__item__delivery-badge__container">
                <div class="product__item__delivery-badge">
                  10 menit Kirim
                </div>
              </div>
              <div class="product__item__sold">1000 produk terjual</div>  
          </div>
        </nuxt-link>
      </li>
  </ul>
</template>
<style lang="scss" scoped>
  .product{
    padding: 0;
    overflow: scroll;
    white-space: nowrap;
    &__item{
      margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        box-shadow: 0 1px 6px #f5f5f5;
        width: 150px;
        position: relative;
        a{
            text-decoration: none;
        }
        img{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        &__content {
            padding: 5px;
            min-height: 240px;
        }
      &__subtitle {
        font-size: '14px';
        color: '#aeaeae';
      }
      &__stock{
        color: '#64a690';
        border: '1px solid #64a690';
        border-radius: '3px';
        display: 'inline-block';
        padding: '2px';
        margin: '10px 0';
      }
      &__discount {
        &__amount {
          background: '#f23132';
          color: '#fff';
          border-radius: '3px';
          padding: '2px 4px';
          margin-right: '5px';
        }
        &__list-price {
          color: '#aeaeae';
          text-decoration: 'line-through';
        }
      }
    }
  }
</style>


