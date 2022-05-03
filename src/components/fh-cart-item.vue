<template>
  <div class="fh-cart-item">
    <div class="bg-blue-100">
      <img :src="cart_item_data.image" :alt="cart_item_data.title" />
    </div>
    <div class="item__info">
      <h3 class="item__title">{{ cart_item_data.title }}</h3>
      <ul class="item__list">
        <li
          class="item__list-item"
          v-for="(propertie, index) in cart_item_data.properties.length"
          :key="index"
        >
          # {{ cart_item_data.properties[index].value }}
        </li>
      </ul>
    </div>
    <button class="button" @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "fh-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss">
.fh-cart-item {
  @apply shadow-lg hover:shadow-xl rounded-md overflow-hidden transition-all;

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }

  & button {
    margin: 2em;
    align-self: center;
    color: #ffffff;

    &:focus,
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
