<template>
  <div class="my-select">
    <div
      class="my-select__title"
      @click="isArrOptionsVisible = !isArrOptionsVisible"
    >
      {{ selected }}
    </div>
    <div class="my-select__options options" v-if="isArrOptionsVisible">
      <span
        class="options__item"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isArrOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.isArrOptionsVisible = false;
    },

    hideSelect() {
      this.isArrOptionsVisible = false;
    },
  },

  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.my-select {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-width: 10rem;

  &__title {
    @apply p-4 rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm;

    &:focus,
    &:hover {
      cursor: pointer;
      outline: auto;
    }
  }

  &__options {
    z-index: 9999;
    position: absolute;
    left: 0;
    top: 3.5rem;
    width: 100%;
  }
}

.options {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @apply rounded-md bg-brandLight border-transparent focus:border-gray-500 focus:bg-brandLight focus:ring-0 text-sm;

  &__item {
    @apply py-2 px-4;

    &:focus,
    &:hover {
      cursor: pointer;
      outline: auto;
    }
  }
}
</style>
