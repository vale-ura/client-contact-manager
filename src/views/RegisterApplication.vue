<template lang="">
    <div id="registerApplication" >
        <NavBarComponent :name="'Register Application'"></NavBarComponent>
    </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent";

export default {
  name: "registerApplication",
  props: {
    people: Object
  },
  components: {
    NavBarComponent
  }
};
</script>

<style scoped>
</style>
