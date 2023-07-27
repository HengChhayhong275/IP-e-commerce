<template>
    <div class="cart">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="cart-btn">
            <button class="Cart mt-3" @click="showCart = !showCart"><i class="fa-solid fa-cart-shopping"></i> Cart {{ cart.length }}</button>
        <br>
            <div id="cart" class="w-25 border border-dark mt-5" v-if="showCart">
            <h4 class="text-center">Cart</h4>
            
            </div>
        </div>

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