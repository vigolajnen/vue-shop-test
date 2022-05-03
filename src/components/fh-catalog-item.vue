<template>
  <div class="fh-catalog-item item">
    <div class="bg-blue-100" @click="productClick">
      <img :src="product_data.image" :alt="product_data.title" />
    </div>
    <div class="item__info">
      <h3 class="item__title">{{ product_data.title }}</h3>
      <p>{{ product_data.description.slice(0, 100) + "..." }}</p>
      <ul class="item__list">
        <li
          class="item__list-item"
          v-for="(propertie, index) in product_data.properties.length"
          :key="index"
        >
          # {{ product_data.properties[index].value }}
        </li>
      </ul>
      <!-- @click="addToCart" -->
      <button class="button" @click="addToCart">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "fh-catalog-item",
  props: {
    product_data: {
      type: Object,
    },
  },
  computed: {
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    productClick() {
      this.$emit("productClick", this.product_data.alias);
    },
  },
};
</script>

<style lang="scss"></style>
