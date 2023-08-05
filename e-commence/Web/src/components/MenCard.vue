<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="item in (filteredProducts)" :key="item.id">
        <div class="card">
          <img :src="item.image" alt="...">
          <div class="category">
            <p class="ms-2">Category:</p>
            <p class="cate1">{{ item.category }}</p>
          </div>
            <h5>{{ item.title }}</h5>
            <p class="text-danger">{{ item.price }}$</p>
          <div class="btn">
            <router-link v-bind:to="'/detial/'+item.id">
              <button class="btn1">VIEW DETAIL</button>
            </router-link>
            <button @click="addToCart(item)" class="btn2">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { items } from '../data';
  export default {
    props: {
    search: String,
    
  },
  computed: {
  
    filteredProducts() {
      return this.items.filter(item => item.category === "Men");
    },
  },
    data() {
      return {
        items,
        cart:[],
      }
    },
    methods: {
      addToCart(item) {
      // Get the cart data from localStorage
      const cart = JSON.parse(localStorage.getItem('cart'));

      // Add the item to the cart
      if (!cart.find((it) => it.id === item.id)) {
        cart.push({ ...item, quantity: 1 });
      }

      // Store the cart data in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    },
    components: {
      
    },
  }
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.card {
width: 330px;
margin: 0 auto;
padding: 10px;
border: 1px solid #ccc;
}
h5,p{
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

img{
  width: 290px;
  height: 340px;
  margin: 0 auto;
}
button{
  max-width: 100%;
  display: inline-block;
  margin: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-family: 'Courier New', Courier, monospace;
}
.btn{
  display: flex;
}
.btn1{
  color: #1B6B93;
  background-color: white;
  border: 1px solid #1B6B93;
}
.btn1:hover{
  background-color: #1B6B93;
  color: white;
}
.btn2{
  color: #7AA874;
  background-color: white;
  border: 1px solid #7AA874;
}
.btn2:hover{
  background-color: #7AA874;
  color: white;
}
.category p{
  display: inline-flex;
}
.cate1{
  position: absolute;
  right: 1.2rem;
}
</style>