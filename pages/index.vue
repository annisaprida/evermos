<template>
  <main>
    <logo/>
    <!-- {{productList}} ini -->
     <section class="content">
        <h1>Termurah di Seluruh Indonesia</h1>
        <product-item-list :productList="productList"/>
    </section>
    <copyright-info/>
  </main>
</template>

<script src="./js/home.js"></script>
