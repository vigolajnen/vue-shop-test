<template>
  <div class="fh-cart fh-cart-grid">
    <fh-cart-item
      v-for="(item, index) in cart_data"
      :key="item.alias"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import fhCartItem from "@/components/fh-cart-item.vue";
export default {
  name: "fh-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    fhCartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "ADD_TO_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
      console.log(data);
    },
  },
};
</script>

<style lang="sass">

</style>
