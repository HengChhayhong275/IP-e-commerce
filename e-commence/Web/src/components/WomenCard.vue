<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="item in filteredProducts" :key="item.id">
          <div class="card">
            <img :src="item.image" alt="...">
            <div class="category">
              <p class="ms-2">Category:</p>
              <p class="cate1">{{ item.category }}</p>
            </div>
              <h5>{{ item.title }}</h5>
              <p class="text-danger">{{ item.price }}</p>
            <div class="btn">
              <router-link v-bind:to="'/detial/'+item.id">
                <button class="btn1">VIEW DETAIL</button>
              </router-link>
              <router-link  v-bind:to="'/detial/'+item.id">
                <button class="btn2">ADD TO CART</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { items } from '../data';
  export default {
    name:'itemcard',
    props: {
    search: String,
  },
  
    data() {
      return{
        items,
      }
    },
    computed: {
      filteredProducts() {
        return this.items.filter(item => item.category === "Women");
      }
    }
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