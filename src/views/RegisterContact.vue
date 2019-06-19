<template>
  <ion-app>
    <NavBarComponent :name="'Register Contact'"></NavBarComponent>
    <ion-content padding>
      <form @submit="checkForm" action="https://vuejs.org/" method="post">
        <ion-item >
          <ion-label  position="floating">Nome</ion-label>
          <ion-input autofocus placeholder="Digite o nome do contato" type="text" required></ion-input>
        </ion-item>
        <ion-item class="ion-padding-top">
          <ion-label position="floating">Telefone</ion-label>
          <ion-input placeholder="Digite o seu telefone" type="number" required></ion-input>
        </ion-item >
        <ion-item class="ion-padding-top">
          <ion-label position="floating">Email</ion-label>
          <ion-input placeholder="Digite o seu email" type="email" required></ion-input>
        </ion-item>
        <AutoCompleteComponent :list="applications" :selecteds="onSelecteds"></AutoCompleteComponent>
        <ion-item lines="none">
          <ion-button type="submit" size="default" color="primary">Add</ion-button>
        </ion-item>
      </form>
    </ion-content>
  </ion-app>
</template> 

<script>
import NavBarComponent from "../components/NavBarComponent";
import AutoCompleteComponent from "../components/AutoCompleteComponent";

export default {
  name: "registerContact",
  data() {
    return {
      applications: [
        "GPV Pelotização",
        "GPV Portos",
        "GPV Minas",
        "GPV Ferrovias"
      ],
      form: Object
    };
  },
  components: {
    NavBarComponent,
    AutoCompleteComponent
  },
  methods: {
    onSelecteds() {

    },
    checkForm() {
      //console.log(event);
    },
    onBack () {
      
    }
  },
  mounted() {}
};
</script>

<style>
</style>

