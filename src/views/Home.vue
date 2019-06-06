<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Contact Manager</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <SearchComponent v-on="{ search: onSearch }"></SearchComponent>
      <CardComponent
        v-for="presentationPeople in presentation"
        v-on="{ information:onDescription, call:onCall }"
        :key="presentationPeople.email"
        :people="presentationPeople"
      ></CardComponent>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <!-- Redirect to application register -->
          <ion-fab-button @click="onRegisterApplication" color="primary">
            <ion-icon name="stats"></ion-icon>
          </ion-fab-button>
          <!-- Redirect to register contact -->
          <ion-fab-button @click="onRegisterContact" color="primary">
            <ion-icon name="contact"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-app>
</template>

<script>
import CardComponent from "../components/CardComponent";
import SearchComponent from "../components/SearchComponent";
import { filter, cloneDeep, lowerCase, trim } from "lodash";
import { isBlank, includes } from "voca";

export default {
  name: "home",
  components: {
    CardComponent,
    SearchComponent
  },
  data() {
    return {
      peoples: [
        {
          name: "carlos",
          email: "gabrielggff25@gmail.com",
          phone: "43999287543",
          applications: ["GPV Pelotização", "GPV Mineração", "GPV Portos"]
        },
        {
          name: "lourenco",
          email: "lourenco@tcs.com",
          phone: "43999287543",
          applications: ["GPV Pelotização"]
        },
        {
          name: "ian",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Daniel",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Rennan",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Alex",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Felipe",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Marcos",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Marcelo",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        },
        {
          name: "Matheus",
          email: "ian@rs.com",
          phone: "43999287543",
          applications: ["GPV Portos"]
        }
      ],
      presentation: []
    };
  },
  methods: {
    onDescription(people) {
      this.presentAlert(
        "Alerta",
        "Sucesso",
        `Obtendo informações da pessoa: ${people.name}`
      );
    },
    onCall(people) {
      this.presentAlert(
        "Alerta",
        "Sucesso",
        `Ligando para a pessoa: ${people.name}`
      );
    },
    onSearch(search) {
      if (isBlank(search)) {
        this.presentation = this.peoples;
        return;
      }

      const processedSearch = trim(lowerCase(search));

      this.presentation = filter(this.peoples, v => {
        let nameLowerCase = lowerCase(v.name);

        return includes(nameLowerCase, processedSearch);
      });
    },
    presentAlert(
      header = "Alert",
      subHeader = "Message",
      message = "Great.",
      buttons = ["OK"]
    ) {
      return this.$ionic.alertController
        .create({
          header,
          subHeader,
          message,
          buttons
        })
        .then(a => a.present());
    },
    onRegisterContact(){
      this.$router.push('/contact');
    },
    onRegisterApplication(){
      this.$router.push('/application');
    }
  },
  mounted() {
    // Copy peoples struct to present
    this.presentation = cloneDeep(this.peoples);
  }
};
</script>

<style scoped>
ion-fab-list,
ion-fab-button {
  position: sticky;
  bottom: 1em;
  right: 0;
}
</style>