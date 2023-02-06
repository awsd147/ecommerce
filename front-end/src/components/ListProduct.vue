<!-- @format -->

<template>
  <div class="container">
    <!-- <div class="product" v-show="getProduct()[0].isDeleletd"> -->
    <h2 style="text-align: center">Product Card</h2>
    <div class="card" tr v-for="product in getProduct()" :key="product.id">
      <img v-bind:src="product.url" style="width: 100%" />
      <h1>{{ product.productName }}</h1>
      <p class="price">{{ product.price }}</p>
      <p>Year : {{ product.year }}</p>
      <p>
        <button @click="getRoutes()">More...</button>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  // import { isProxy,toRaw } from "vue";
  export default {
    name: "ListProduct",
    props: {},
    data() {
      return {
        listProduct: [],
      };
    },
    mounted() {
      axios.get("http://localhost:8081/api/v1/Products").then((response) => {
        this.listProduct = response.data;
      });
    },
    methods: {
      getProduct() {
        return this.listProduct;
      },
      getRoutes() {
        this.$router.push("/detail");
      },
    },
    computed: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }

  .price {
    color: grey;
    font-size: 22px;
  }

  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  .card button:hover {
    opacity: 0.7;
  }
</style>
