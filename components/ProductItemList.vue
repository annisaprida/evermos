<template>
  <ul class="product">
      <li class="product__item" v-for="product in productList" :key="product.id">
        <div @click="goToDetailPage(product.id)">
          <img
            alt="product"
            :src="product.thumbnail"
            width="150"
            height="80"
          />
          <div class="product__item__content">
            <div class="product__item__title">{{product.name}}</div>
            <div class="product__item__subtitle">{{product.detailName}}</div>
            <div class="product__item__stock">Stock {{product.stock}}</div>
              <div class="product__item__discount">
                  <span class="product__item__discount__amount">{{product.discount}}%</span>
                  <span class="product__item__discount__list-price">{{toCurrencyFormat(product.listPrice)}}</span>
              </div>
            <div class="product__item__price">{{toCurrencyFormat(product.price)}}</div>
             <div class="product__item__delivery-badge__container">
                <div class="product__item__delivery-badge">
                  {{product.deliveryDuration}} Kirim
                </div>
              </div>
              <div class="product__item__sold">{{product.sold}} produk terjual</div>  
          </div>
        </div>
      </li>
  </ul>
</template>
<script src="./js/product-item-list.js"></script>

<style lang="scss" scoped>
  .product{
    padding: 0;
    overflow: scroll;
    white-space: nowrap;
    &__item{
      cursor: pointer;
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
        font-size: 14px;
        color: #aeaeae;
      }
      &__stock{
        color: #64a690;
        border: 1px solid #64a690;
        border-radius: 3px;
        display: inline-block;
        padding: 2px;
        margin: 10px 0;
      }
      &__discount {
        display: block;
        &__amount {
          background: #f23132;
          color: #fff;
          border-radius: 3px;
          padding: 2px 4px;
          margin-right: 5px;
        }
        &__list-price {
          color: #aeaeae;
          text-decoration: line-through;
        }
      }
      &__price {
        color: #f06b11;
        font-weight: bold;
        font-size: 18px;
        margin: 10px 0;
        display:inline-block;
      }
      &__delivery-badge {
        color:#64a690;
        background: #d4edda;
        display: inline-block;
        border-radius: 3px;
        padding: 2px;
      }
    }
  }
</style>


