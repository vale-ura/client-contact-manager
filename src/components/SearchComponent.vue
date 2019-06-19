<template>
  <div>
    <ion-searchbar animated @ionChange="onSearch"></ion-searchbar>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(event) {
      let {
        detail: { value }
      } = event;
      this.$emit("search", value);
    }
  }
};
</script>

<style lang="">
</style>
