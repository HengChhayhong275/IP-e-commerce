<template>
    <div id="checkout">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div id="header" class="w-100">
        <router-link to="/" class="text-decoration-none"><h2 class="text-dark">168 CLOTHES STORE</h2></router-link>
    </div>
    <div id="sub-header" class="w-100">
        <button type="button" class="btn btn-light ms-2 mt-2" onclick="window.history.back()">
            <i class="fa-solid fa-circle-arrow-left me-2"></i>Back
        </button>
    </div>
        <h5 class="text-center mt-1 text-decoration-underline">SHOPPING BAG</h5>
        <br>
        <div id="container" class="d-flex">
            <div>
                <div id="head" class="d-flex justify-content-between ms-5 mt-1">
                <h6 class="px-5 py-3 ms-4">ITEM</h6>
                <h6 class="px-5 py-3">PRODUCT</h6>
                <h6 class="px-5 py-3">PRICE</h6>
                <h6 class="px-5 py-3">QTY</h6>
                <h6 class="px-5 py-3 me-4">SUBTOTAL</h6>
            </div>
            <div id="bag" class="border border-light mt-1 ms-5">
                <p class="ms-5 mt-3"><span class="me-2 text-primary">{{cart.length}}</span> ITEM IN CART</p>
                <ul v-for="item in  cart" :key="item.id">
                    <li class="d-flex justify-content-between bg-white my-3">
                        <div class="my-4 ms-4"><img :src="item.image" alt="..."></div>
                        <div class="px-5 my-auto "><h5>{{ item.title }}</h5></div>
                        <div class="px-5 my-auto "><p>{{ item.price }}$</p></div>
                        <button @click="increaseQuantity(item)" class="btn btn-success btn-sm my-auto me-1">+</button>
                        <div class=" my-auto ">{{item.quantity}}</div>
                        <button @click="decreaseQuantity(item)" class="btn btn-danger btn-sm my-auto me-1">-</button>
                        <div class="ps-5 my-auto text-danger me-5"><p>{{ (item.price * item.quantity) }}$</p></div>
                        <!-- <img :src="item.image" alt="..." class="my-1">
                        <h5 class="px-5 my-auto">{{ item.title }}</h5>
                        <p class="px-5 my-auto">{{ item.price }}</p> -->
                    </li>
                </ul>
            </div>
            <div class="btn-continue mt-3">
                <router-link to="/product" class="text-decoration-none text-dark border border-dark rounded bg-dark text-white p-2"><a>Continue Shopping</a></router-link>
            </div>
            <br>
            </div >
            <div id="cash" class="border border-dark w-25 mx-auto mt-1 h-75">
                <h5 class="text-center text-decoration-underline mt-2">ORDER SUMMARY</h5>
                <hr class="mx-auto mt-3">
                    <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">SUBTOTAL</p>
                        <p class="mb-2 me-3 mt-3 text-danger">{{ total }}$</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">DISCOUNT</p>
                    <p class="mb-2 me-3 mt-3 text-danger">0$</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">SHIPPING</p>
                    <p class="mb-2 me-3 mt-3 text-danger">0$</p>
                </div>
                <hr class="mx-auto mt-3">
                <div class="d-flex justify-content-between">
                    <h4 class="mb-2 ms-3 mt-3">TOTAL</h4>
                        <h4 class="mb-2 me-3 mt-3 text-success">{{ total }}$</h4>
                </div>
                <div class="d-flex justify-content-center">
                    <router-link to="/payment"><button type="button" id="checkout" class="btn btn-success btn-lg btn block text-white my-4">PROCEED TO CHECKOUT</button></router-link>
                </div>
                <hr class="mx-auto mt-3">

                <p class="text-center">PAYMENT METHOD</p>
                <div class="icon-container">
                    <i class="fa-brands fa-cc-mastercard me-4"></i>
                    <i class="fa-brands fa-cc-visa me-4"></i>
                    <i class="fa-brands fa-cc-paypal"></i>
                </div>
                </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'checkout',
components:{
},
data() {
    return {
      cart: [],
    };
  },
  mounted() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.cart = cart;
    }
  },
  methods: {
   removeItem(item) {
      const index = this.cart.indexOf(item);
      const modifiedCart = this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(modifiedCart));
    }, 
    increaseQuantity(item) {
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } else {
        this.removeItem(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }

    },
  },
  computed: {
    subtotal() {
      return this.cart.reduce((total, item) => {
        return total += item.price * item.quantity;
      }, 0);
    },
    total() {
      
      return this.subtotal;
    },
  },

}
</script>

<style scoped>
*{
    margin: 0;
    border: 0;
    padding: 0;
}
#header{
    background-color: #f2f2f2;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
i:hover{
    scale: 1.1;
}
#head{
    background-color: #d9d9d9;
    width: 100%;
    max-height: 10%;
}
#bag{
    background-color: #d9d9d9;
    width: 100%;
    max-height: 70%;
    height: max-content;
    overflow: scroll;
}
hr{
    border-top: 2px solid black;
    width: 90%;
}
li img{
    max-width: 90px;
    max-height: 100px;

}
li{
    height: 150px;
    width: 95%;
    margin: auto;
}
.btn-continue{
    margin-left: 45%;
}
.payment{
    width: 10%;
    height: 10%;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 25px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#bag .btn{
    width: 30px;
    height: 30px;
}


</style>