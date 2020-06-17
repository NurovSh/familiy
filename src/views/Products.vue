<template>
  <div class="home">
  <b-container><h1 class="home__title page-title text-center">Product page</h1></b-container>
    <b-container>
    <b-row>
    <b-col v-for="product in products" :key="product.id"  cols="12" md="4">
     <ProductCard :info="product"/>
    </b-col>
    <b-col cols="12">
        <router-link to="/product-add">Add new product</router-link>
    </b-col>
    </b-row>
    </b-container>
    
  </div>
</template>
<script>
import ProductCard from '../components/Product.vue';
export default {
  name: 'Home',
  components: {
      ProductCard,
  },

  computed: {
      products() {
          return this.$store.state.products;
      }
  },

  mounted() {
      console.log(this.products, this.$store.state);
  }
};
</script>
