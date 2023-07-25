<template>
  <div class="product">
    <HeaderProduct/> 
    <div class="d-flex justify-content-between">
      <!-- <router-link to="/" class="btn btn-info h-25 mt-2 ms-2" style="background-color: #f2f2f2;">Back to Home Page</router-link> -->
      <button type="button" class="btn btn-light ms-2 mt-2 p-0">
        <router-link class="btn" to="/">
          <i class="fa-solid fa-circle-arrow-left me-2"></i>HOME
        </router-link>
      </button>
      <h1 class="mx-auto mt-1" style="color: #468B97;">PRODUCTS</h1>
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
i, .btn{
  color: black;
  text-decoration: none;
  font-weight: bolder;
}
h1{
  position: absolute;
  left: 43%;
  text-transform: uppercase;
}
</style>
