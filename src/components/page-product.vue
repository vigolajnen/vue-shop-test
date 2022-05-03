<template>
  <div class="page-product">
    <div class="page-product__wrapper">
      <h1 class="page-product__title">{{ product.title }}</h1>
      <div class="page-product__pic">
        <img :src="product.image" :alt="product.title" width="300" height="200" />
      </div>
      <p class="page-product__text">{{ product.description }}</p>
      <ul class="page-product__list">
        <li
          v-for="(propertie, index) in product.properties.length"
          :key="index"
        >
          {{ product.properties[index].title }}:
          <b>{{ product.properties[index].value }}</b>
        </li>
      </ul>
      <div class="page-product__footer">
        <span class="page-product__price">{{ product.price }} руб.</span>
        <button 
        @click="addToCart"
        class="page-product__btn button" 
        type="button"
        >Купить</button>
      </div>
    </div>
    <!-- <fh-cart /> -->
  </div>
</template>

<script>
// import FhCart from '@/components/fh-cart.vue';
import { mapGetters } from "vuex";
export default {
  name: "page-product",
  components: {
    // FhCart,
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    product() {
      let result = {};
      let vm = this;
      this.PRODUCTS.map((item) => {
        if (item.alias === vm.$route.query.product) {
          result = item;
        }
      });
      return result;
    },
  },
  methods: {
    addToCart(){
      this.$emit('addToCart', this.product);
      console.log(111)
    },
  },
};
</script>

<style lang="scss">
.page-product {
  @apply relative my-10;

  &__wrapper {
    // md:translate-x-6/12
    @apply transition-all md:w-1/2  ml-auto mr-0 sm:pl-5 md:pl-20;
  }

  &__title {
    @apply text-2xl font-bold my-0 mb-6 text-center md:text-left;
  }

  &__pic {
    @apply mb-6 md:mb-0 shadow-lg rounded-md overflow-hidden md:absolute md:top-0 md:left-0 md:w-1/2;

    & img {
      @apply w-full object-cover;
    }
  }

  &__text {
    @apply mb-6 md:pb-6 lg:w-3/4;
  }

  &__list {
    @apply mb-6 md:pb-6;
  }

  &__footer {
    // align-center
    @apply grid grid-cols-2 gap-2  lg:w-3/4;
  }

  &__price {
    @apply text-3xl font-bold leading-normal text-brand;
  }

  &__btn {
    // focus:shadow-outline
    @apply h-10 w-auto px-5 m-2 xl:w-1/2 mr-0 ml-auto text-white transition-colors duration-150 bg-brand rounded-lg hover:bg-brandDark;
  }
}
</style>
