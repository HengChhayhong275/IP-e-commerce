<template>
  <div class="men">
    <HeaderProduct/>
    <div class="d-flex">
      <button type="button" class="btn btn-light ms-2 mt-2 p-0"><router-link class="btn" to="/">
        <i class="fa-solid fa-circle-arrow-left me-2"></i>HOME
      </router-link>
        </button>
      <h1 style="color: #468B97;">Accessories</h1>
    </div>
    <AccessoriesCard/>
  </div>
</template>
<script>
import HeaderProduct from '../components/HeaderProduct.vue'
import AccessoriesCard from './AccessoriesCard.vue';
  export default{
    name: "product",
    components: {
      HeaderProduct,
      AccessoriesCard
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
  left: 42%;
  text-transform: uppercase;
}
</style>
