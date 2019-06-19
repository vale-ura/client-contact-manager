<template>
  <ion-app>
    <NavBarComponent :name="'Register Application'"></NavBarComponent>
    <ion-content padding>
      <form @submit="checkForm" action="https://vuejs.org/" method="post">
        <ion-item >
          <!-- Name -->
          <ion-label  position="floating" >Nome</ion-label>
          <ion-input autofocus placeholder="Insira o nome da aplicação" type="text" required></ion-input>
        </ion-item>
        <!-- Description -->
        <ion-item class="ion-padding-top"> 
          <ion-label position="floating" >Descrição</ion-label>
          <ion-input placeholder="Insira a descrição da aplicação" type="text" required></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-button type="submit" size="default" color="primary">Add</ion-button>
        </ion-item>
      </form>
    </ion-content>
  </ion-app>
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
  },
  methods: {
    checkForm() {
      //console.log(event);
    }
  }
};
</script>

<style scoped>
</style>
