<template>
  <div id="BagHeader">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div id="header" class="w-100">
        <h2>168 CLOTHES STORE</h2>
    </div>
    <div id="sub-header" class="w-100">
        <button type="button" class="btn btn-light ms-2 mt-2" onclick="window.history.back()">
            <i class="fa-solid fa-circle-arrow-left me-2"></i>Back
        </button>
        <SearchVue class="mt-2 me-5"/>
        <button class="cart-btn" type="button">
            <i class="fa-solid fa-cart-shopping mt-3"></i>
        </button>
    </div>
  </div>
</template>

<script>
import SearchVue from "./Search.vue";
export default{
    components: {
        SearchVue,
    }
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
.cart-btn{
    position: absolute;
    right: 0.7rem;
    font-size: x-large;
    background-color: #ffffff;
}
</style>