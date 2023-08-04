<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div id="header" class="w-100 text-center">
            <h2>168 CLOTHES STORE</h2>
        </div>
        <div id="sub-header" class="w-100">
            <button type="button" class="btn btn-light ms-2 mt-2" onclick="window.history.back()">
                <i class="fa-solid fa-circle-arrow-left me-2"></i>Back
            </button>
        </div>
        <div class="container">
        <br>
            <div class="d-flex">
                <div class="w-75 h-25">
                    <div class="bg">
                        <h6 class="text-center py-2">CREDIT CARD</h6>
                    </div>
                    <div class="w-100 mt-5 bg-light py-2">
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" class="form-control" maxlength="16" placeholder="1234 5678 9012 3456">
                        </div>
                        <div class="form-group">
                            <label for="card-holder-name">Card Holder Name</label>
                            <input type="text" id="card-holder-name" class="form-control" placeholder="John Wick">
                        </div>
                        <div class="form-group">
                            <label for="expiration-date">Expiration Date</label>
                            <input type="text" id="expiration-date" class="form-control" placeholder="01/23" maxlength="5" onkeyup="
                            if (this.value.length === 2) {this.value += '/';} ">
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" maxlength="3" class="form-control" placeholder="123">
                        </div>
                    </div>
                </div>
                <div id="cash" class="border border-dark w-25 ms-5  h-75">
                    <h5 class="text-center text-decoration-underline mt-2">ORDER SUMMARY</h5>
                <hr class="mx-auto mt-3">
                <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">SUBTOTAL</p>
                    <p class="mb-2 me-3 mt-3">100,00$</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">DISCOUNT</p>
                    <p class="mb-2 me-3 mt-3">0$</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-2 ms-3 mt-3">SHIPPING</p>
                    <p class="mb-2 me-3 mt-3">0$</p>
                </div>
                <hr class="mx-auto mt-3">
                <div class="d-flex justify-content-between">
                    <h4 class="mb-2 ms-3 mt-3">TOTAL</h4>
                    <h4 class="mb-2 me-3 mt-3">0$</h4>
                </div>
                <div class="d-flex justify-content-center" id="btns">
                    <router-link to="/thank"><button type="button" id="checkout" class="btn btn-success btn-lg btn block text-white my-4">PAY</button></router-link>
                </div>
                <hr class="mx-auto mt-3">
                <p class="text-center mb-3 mt-2">PAYMENT METHOD</p>
                <div class="icon-container">
                    <i class="fa-brands fa-cc-mastercard me-3"></i>
                    <i class="fa-brands fa-cc-visa me-3"></i>
                    <i class="fa-brands fa-cc-paypal"></i>
                </div>
                </div>
            </div>
        </div>        
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    border: 0;
}
#header{
    background-color: #f2f2f2;
}
.bg{
    background-color: #f0f0f0;
}
.form-group {
  width: 80%;
  margin: 20px auto;
}
hr{
    border-top: 2px solid black;
    width: 90%;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btns button{
    padding-left: 80px;
    padding-right: 80px;
}
</style>