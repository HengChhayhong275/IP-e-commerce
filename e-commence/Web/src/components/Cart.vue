<template>
    <div class="cart">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="cart-btn">
            <button class="Cart mt-3" @click="showCart = !showCart"><i class="fa-solid fa-cart-shopping"></i> Cart {{ cart.length }}</button>
        <br>
            <div id="cart" class="w-25 border border-dark mt-5" v-if="showCart">
            <h4 class="text-center">Cart</h4>
            <ul>
                <li v-for="it in cart" :key="it.id">
                    {{ it.title }} 
                    {{ it.quantity }} 
                    {{ it.price }}
                 <button @click="removeFromCart(it)">X</button>
                </li>
            </ul>
            </div>
        </div>
        
        <h1>Products</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
        <button @click="addToCart(item)">Add to cart</button>
      </li>
    </ul>

    <h1>Cart</h1>
    <ul>
      <li v-for="it in cart" :key="it.id">
        {{ it.title }} - {{ it.quantity }} - {{ it.price }}
      </li>
    </ul>

    </div>
  
</template>

<script>
import { items } from '../data';
export default {
    data() {
    return {
      items,
      cart: [],
      showCart: false
    };
  },
  methods: {
    addToCart(item) {
      const it = this.cart.find((it) => it.id === item.id);
      if (it) {
        it.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(item) {
      const index = this.cart.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
}
</script>

<style>
.Cart{
    max-height: 40px;
    width: 90px;
    font-size: 1rem;
    background: #468B97;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    padding: 0.3rem;
    position: absolute;
    right: 1rem;
    border-radius: 10px;
  }
  .Cart:hover{
    scale: 1.05;
    color: #8CC0DE;
  }
  #cart{
    position: absolute;
    right: 10px;
  }
  li{
    list-style: none;
  }
</style>