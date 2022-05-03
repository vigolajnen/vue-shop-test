<template>
  <div class="page-cart">
    <h1>Корзина</h1>
    <fh-cart :cart_data="CART" />
    <p v-if="CART.length == 0" class="page-cart__empty-text">Корзина пуста</p>
  </div>
</template>

<script>
import FhCart from "./fh-cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "page-cart",
  components: {
    FhCart,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.page-cart {
  @apply container my-4 mx-auto;

  &__empty-text {
    @apply text-center mb-4;
  }

  & h1 {
    @apply text-center text-3xl mb-4;
  }
}
</style>
