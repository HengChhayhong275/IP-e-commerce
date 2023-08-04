<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <div id="header" class="w-100 text-center">
             <h2>168 CLOTHES STORE</h2>
         </div>
         <div class="text-center" id="container">
            <div>
                <i class="fa-regular fa-circle-check my-5"></i>
            </div>
             <h3>Congratulation</h3>
             <h3>Your Purchase was successful</h3>
             <h3>Thank You For Your Order</h3>
         </div>
         <div class="d-flex justify-content-center mt-5">
             <router-link to="/"><button type="button" class="tn btn-warning btn-lg btn block me-3">Go To Home Page</button></router-link>
             <router-link to="/product"><button type="button" class="btn btn-success btn-lg btn block">Go To Product Page</button></router-link>
         </div>
     </div>    
 </template>
   
 <script>
 export default {
     
 };
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
 button{
     padding: 10px 40px;
 }
 h3{
     margin: 20px;
 }

 i {
   font-size: 100px;
 }
 #container{
    margin-top: 130px;
 }
 </style>
