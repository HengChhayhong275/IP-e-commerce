<template>
    <div id="payment">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div id="header" class="w-100 text-center">
            <router-link to="/" class="text-decoration-none"><h2 class="text-dark">168 CLOTHES STORE</h2></router-link>
        </div>
        <div id="sub-header" class="w-100">
            <button type="button" class="btn btn-light ms-2 mt-2" onclick="window.history.back()">
                <i class="fa-solid fa-circle-arrow-left me-2"></i>Back
            </button>
        </div>
        <div class="container">
            <!-- <div class="w-75 h-25 bg mx-auto">
            <h6 class="text-center py-2">ORDER SUMMARY</h6>
            <div class="d-flex justify-content-between w-100">
                <h4 class="mt-3 mx-3">TOTAL</h4>
                <h4 class="mt-3 mx-3">0$</h4>
            </div>
        </div> -->
        <br>
        <div class="d-flex">
            <div class="w-50 h-25">
                <div class="bg">
                    <h6 class="text-center py-2">BILLING ADDRESS</h6>
                </div>
                <!-- form -->
                <div class="w-100 bg-light">
                <form class="w-100 bg-light" @submit.prevent="onSubmit" >
                    <div class="form-group">
                        <label for="full-name"><i class="fa fa-user mx-2 mb-2"></i>Full Name
                            <input v-model="FullName" type="text" class="form-control" id="full-name" placeholder="Ex: John Wick" required/>
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fa fa-envelope mx-2 mb-2"></i> Email
                            <input v-model="Email" type="email" class="form-control" id="email" placeholder="Example@gmail.com" required/>
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="province"><i class="fa fa-institution mx-2 mb-2"></i>Province</label>
                        <select class="form-control" id="province">
                        <option value="Phnom Penh">Phnom Penh</option>
                        <option value="Kandal">Kandal</option>
                        <option value="Banteay Meanchey">Banteay Meanchey</option>
                        <option value="Battambang">Battambang</option>
                        <option value="Kampong Cham">Kampong Cham</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="address"><i class="fa-regular fa-address-card mx-2 mb-2"></i>Address
                            <input v-model="Address" type="text" class="form-control" id="address" placeholder="Ex: Takhmau" required />
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="mobile-phone"><i class="fa-solid fa-phone mx-2 mb-2"></i>Phone Number
                            <input v-model="PhoneNumber" type="tel" class="form-control" id="mobile-phone" placeholder="0xx-xxx-xxx" required
                            pattern="[0-9]{3}[0-9]{3}[0-9]{3,4}"/>
                        </label>
                    </div>
                    <div class="btns">
                        <button @click="changeWord" :disabled="PhoneNumber === ''" type="submit" class="btn btn-primary px-5 mb-3">{{word}}</button>  
                    </div>
                </form>
            </div>
            </div>
                <div class="w-50 h-25 ms-3">
                    <div class="bg">
                        <h6 class="text-center py-2">DELIVERY</h6>
                    </div>
                    <!-- delivery -->
                    <div class="w-100 bg-light shiping">
                        <h6 class="text-center py-2">OUR DELIVERY COMPANY</h6>
                        <p class="text-center">Please choose your delivery company near you.</p>
                        <p class="text-center pb-2">It took one day for province and half day in PhnomPenh</p>
                        <div>
                            <ul>
                                <li v-for="shippingMethod in shippingMethods" :key="shippingMethod.id">
                                    <div class="d-flex justify-content-between my-2">
                                    <input class="ms-5 me-3" type="radio" :id="shippingMethod.id" name="shipping-method">    
                                    <label :for="shippingMethod.id" class="mt-1">{{ shippingMethod.name }}</label>
                                    <p class="mx-5 mt-2">{{ shippingMethod.price }}$</p>
                                    </div>
                                </li>
                            </ul>
                            <br>
                        </div>
                    </div>    
                        <div class="last-btn">
                            <router-link to="/paycheck">
                            <button class="btn btn-success px-5 py-3 mt-5 w-100">
                                <span>Go to Paycheck</span>
                            </button>
                        </router-link>    
                        </div>
                </div>    
        </div>
       </div> 
    </div>
</template>

<script>
export default {
    
    data() {
    return {
      word: 'Confirm Information',
      FullName: "",
      Email: "",
      Address: "",
      PhoneNumber: "",
      selectedOption: "",
      shippingMethods: [
        {
          id: 1,
          name: "Vireak Buntham",
          price: 1.5,
        },
        {
          id: 2,
          name: "CE Express",
          price: 1.5,
        },
        {
          id: 3,
          name: "J&T",
          price: 1.5,
        },
      ],
    };
  },
  methods: {
    changeWord() {
      this.word = 'Information have been comfirmed';
    },
    onSubmit() {
      // Check if all the form fields are filled
      if (this.FullName === "" || this.Email === "" || this.Address === "" || this.PhoneNumber === "") {
        return;
      }

      // Submit the form
      this.$emit("submit", { FullName: this.FullName, Email: this.Email,Address: this.Address,PhoneNumber: this.PhoneNumber });
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*{
    margin: 0;
    padding: 0;
    border: 0;
}
#header{
    background-color: #f2f2f2;
}
form {
  margin-top: 20px;
  background-color: transparent;
  font-family: 'Ubuntu', sans-serif;    
}

.form-group {
  width: 80%;
  margin: 20px auto;
}

label {
  font-weight: bold;
  width: 100%;
}

button {
  margin-top: 10px;
}
.btns{
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg{
    background-color: #f0f0f0;
}
.shiping{
    margin: 20px auto;
}
.icon-container {
  margin: 20px 0;
  padding: 7px 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.last-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
li{
    list-style: none;
}
</style>