<template>
  <fh-header />

  <main class="fh-main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<script>
import fhHeader from "@/components/fh-header.vue";

export default {
  name: "App",
  components: { fhHeader },
  data() {
    return {};
  },
  methods: {},
};
</script>
