<template>
  <div class="product">
    <HeaderProduct/> 
    <div class="d-flex justify-content-between">
      <router-link to="/" class="btn btn-info h-25 mt-2 ms-2" style="background-color: #f2f2f2;">Back to Home Page</router-link>
      <h1 class="mx-auto" style="color: #468B97;">Products</h1>
      <Search @search="search = $event"/>
    </div>
    <ItemCard :search="search"/>
  </div>
</template>
<script>
import HeaderProduct from '../components/HeaderProduct.vue'
import Search from '../components/Search.vue';
import ItemCard from '../components/ItemCard.vue';
  export default{
    name: "product",
    components: {
      HeaderProduct,
      Search,
      ItemCard
    },
    data(){
      return{
        search:'',
      };
    },
  };
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
div{
  font-family: 'Playfair Display', serif;
}
</style>
