<template>
    <div id="detial">
        <HeaderBag/>
            <div class="container">
                <div class="card">
                        <div class="wrapper row">
                            <div class=" col-md-6">
                                <div class="tab-content">
                                    <div class="tab-pane active">
                                        <img v-bind:src="item.image" />
                                    </div>
                                </div> 
                            </div>
                            <div class="details col-md-6">
                                <h3 class="title">{{ item.title }}</h3>
                                <h4 class="price mt-2">{{ item.price }}</h4>
                                <p class="description mt-2">{{ item.description }}</p>
                                <hr class="hr">
                                <div class="size">
                                    <p class="mt-1">available size : </p>
                                    <ul class="d-flex mx-1">
                                        <li><button type="button" class="mx-2 rounded-circle border border-secondary ">S</button></li>
                                        <li><button type="button" class="mx-2 rounded-circle border border-secondary ">M</button></li>
                                        <li><button type="button" class="mx-2 rounded-circle border border-secondary ">L</button></li>
                                    </ul>
                                </div>
                                <div class="color d-flex">
                                    <p class="mt-1">available color : </p>
                                    <ul class="d-flex mx-1">
                                        <li><button type="button" class="me-2 rounded-circle border border-secondary bg-secondary" style="width: 25px; height: 25px;"></button></li>
                                        <li><button type="button" class="mx-2 rounded-circle border border-secondary bg-dark" style="width: 25px; height: 25px;"></button></li>
                                        <li><button type="button" class="mx-2 rounded-circle border border-secondary bg-success" style="width: 25px; height: 25px;"></button></li>
                                    </ul>
                                </div>
                                <hr class="hr">
                                <div class="amount">
                                    <h4>amount</h4>
                                    <button  id="amount-button" class="me-3 px-4 btn btn-light" @click="decreaseAmount">-</button>
                                    <span id="amount-button" class="me-3 px-4 py-2 btn btn-light">{{ amount }}</span>
                                    <button id="amount-button" class="me-3 px-4 btn btn-light" @click="increaseAmount">+</button>
                                </div>
                                <div class="action">
                                    <button class="add-to-cart mt-5" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { items } from '../data';
import HeaderBag from './HeaderBag.vue';
export default {
    name: "detial",
    data() {
        return {
            item: items.find((p) => p.id == this.$route.params.id),
            amount: 0
        };
    },
    components: {
        HeaderBag,
    },
    methods: {
        increaseAmount() {
        this.amount++;
    },
        decreaseAmount() {
            if (this.amount > 0) {
            this.amount--;
      }
    }
  }
}
</script>

<style scoped>
    .card{
        width: 90%;
        margin: auto;
    }
    #detial {
        font-family: 'open sans';
        overflow-x: hidden; 
    }
    img {
        max-width: 80%; 
        max-height: 450px;
    }
    hr {
        border: none;
        border-bottom: 3px solid black;
    }
    ul{
        list-style: none;
    }
    .size{
        display: flex;
    }
    #amount-button{
        background-color: #d9d9d9;
    }

    @media screen and (max-width: 996px) {
    }

    .tab-content {
        overflow: hidden; }
    .tab-content img {
        width: 100%;
        animation-name: opacity;
        animation-duration: .3s; }

    .card {
        margin-top: 50px;
        background: #eee;
        padding: 3em;
        line-height: 1.5em; 
    }

    @media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex; } 
    }
    .add-to-cart {
        width: 40%;
        background: black;
        padding: 1em 1.5em;
        border: none;
        text-transform: UPPERCASE;
        font-weight: bold;
        color: #fff;
        transition: background .3s ease; }
    .add-to-cart:hover{
        background: #b36800;
        color: #fff; }

    @keyframes opacity {
    0% {
        opacity: 0;
                transform: scale(3); }
    100% {
        opacity: 1;
                transform: scale(1); } }
</style>