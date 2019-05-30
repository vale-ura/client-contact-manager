<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Contact Manager</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <CardComponent v-for="people in peoples" :key="people.email" :people="people"></CardComponent>
    </ion-content>
  </ion-app>
</template>

<script>
import CardComponent from "./components/CardComponent";

export default {
  name: "app",
  components: {
    CardComponent
  },
  data() {
    return {
      peoples: [
        {
          name: "carlos",
          email: "gabrielggff25@gmail.com",
          phone: "43999287543",
          applications: [
            "GPV Pelotização",
            "GPV Mineração",
            "GPV Portos"
          ]
        },
        {
          name: "lourenco",
          email: "lourenco@tcs.com",
          phone: "43999287543",
          applications: [
            "GPV Pelotização"
          ]
        },
        {
          name: "ian",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: [
            "GPV Portos"
          ]
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
