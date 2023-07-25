<template>
  <div class="men">
    <HeaderProduct/>
    <div class="d-flex">
      <button type="button" class="btn btn-light ms-2 mt-2 p-0"><router-link class="btn" to="/">
        <i class="fa-solid fa-circle-arrow-left me-2"></i>HOME
      </router-link>
        </button>
      <h1 style="color: #468B97;">Kid</h1>
    </div>
    <KidCard/>
  </div>
</template>
<script>
import HeaderProduct from '../components/HeaderProduct.vue'
import KidCard from './KidCard.vue';
  export default{
    name: "product",
    components: {
      HeaderProduct,
      KidCard
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
  left: 45%;
  text-transform: uppercase;
}
</style>
