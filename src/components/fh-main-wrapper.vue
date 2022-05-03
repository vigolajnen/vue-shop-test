<template>
  <div class="fh-main-wrapper">
    <fh-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <fh-cart />
  </div>
</template>

<script>
import fhHeader from "@/components/fh-header.vue";
import FhCart from './fh-cart.vue';
export default {
  name: "fh-main-wrapper",
  components: {
    fhHeader,
    FhCart
  },
  data() {
    return {
      title: "main",
    };
  },
};
</script>

<style lang="scss">
// @import "@/assets/styles/variables.scss";

.fh-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
