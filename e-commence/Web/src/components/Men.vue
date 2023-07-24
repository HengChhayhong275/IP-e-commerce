<template>
    <div class="men">
      <HeaderProduct/> 
      <div class="d-flex justify-content-between">
        <h3 class="ms-3 mt-2">Men</h3>
        <Search/>
      </div>
      <ItemCard/>
    </div>
  </template>
  <script>
  import HeaderProduct from '../components/HeaderProduct.vue'
  import Search from '../components/Search.vue';
  import ItemCard from './ItemCard.vue';
  import {items} from '../data'
    export default{
      name: "men",
      components: {
        HeaderProduct,
        Search,
        ItemCard
      },
      props: {
        item: items,
      },
      mounted() {
      this.item = items.filter(item => item.category === "Men");
    },

    }
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
  div{
    font-family: 'Playfair Display', serif;
  }
  </style>
  