<template>
  <ion-header>
    <ion-item color="primary">
      <ion-icon @click="goBack" name="arrow-round-back"></ion-icon>
      <ion-title>{{name}}</ion-title>
    </ion-item>
  </ion-header>
</template>

<script>
export default {
  name: "navbar",
  props: {
    name: undefined
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
