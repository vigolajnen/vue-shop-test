<template>
  <div class="">
    <div class="fh-filters">
      <my-select
        class="fh-filters__item"
        :options="options"
        @select="sortCountDaysProduct"
        :selected="titleOptions[0]"
      />
      <my-select
        class="fh-filters__item"
        :options="durations"
        @select="sortDurationsProduct"
        :selected="titleOptions[1]"
      />
      <my-select
        class="fh-filters__item"
        :options="visits"
        @select="sortVisitsProduct"
        :selected="titleOptions[2]"
      />
      <my-select
        class="fh-filters__item"
        :options="durations"
        @select="sortDurationsProduct"
        :selected="titleOptions[3]"
      />
      <my-select
        class="fh-filters__item"
        :options="visits"
        @select="sortVisitsProduct"
        :selected="titleOptions[4]"
      />
    </div>
    <div class="fh-catalog">
      <fh-catalog-item
        v-for="product in filteredProducts"
        :key="product.alias"
        :product_data="product"
        @addToCart="addToCart"
        @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>
import MySelect from "@/components/UI/my-select.vue";

import FhCatalogItem from "./fh-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "fh-catalog",
  components: {
    FhCatalogItem,
    MySelect,
  },
  data() {
    return {
      options: [
        { name: "100 занятий", value: 1 },
        { name: "18 занятий", value: 2 },
        { name: "36 занятий", value: 3 },
        { name: "разовое посещение", value: 4 },
      ],
      durations: [
        { name: "1 год", value: 1 },
        { name: "6 месяцев", value: 2 },
        { name: "1 месяц", value: 3 },
      ],
      visits: [
        { name: "Утро", value: 1 },
        { name: "Вечер", value: 2 },
      ],
      titleOptions: [
        "Количество занятий",
        "Срок действия",
        "Время посещения",
        "Тип секции",
        "Категория тренера",
      ],
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },

    productClick(alias) {
      this.$router.push({ name: "product", query: { product: alias } });
    },

    sortCountDaysProduct(option) {
      this.titleOptions[0] = option.name;
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map((item) => {
        if (item.properties[0].value === option.name) {
          vm.sortedProducts.push(item);
        }
      });
    },

    sortDurationsProduct(option) {
      this.titleOptions[1] = option.name;
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map((item) => {
        if (item.properties[1].value === option.name) {
          vm.sortedProducts.push(item);
        }
      });
    },

    sortVisitsProduct(option) {
      this.titleOptions[2] = option.name;
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map((item) => {
        if (item.properties[2].value === option.name) {
          vm.sortedProducts.push(item);
        }
      });
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.fh-filters {
  // @apply mx-auto container py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 transition-all;

  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  padding-top: 2em;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  &__item {
    width: 100%;
  }
}
</style>
