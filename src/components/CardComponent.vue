<template>
  <div id="card-component">
    <ion-item-sliding>
      <ion-item>
        <ion-icon color="secondary" name="call" @click="$emit('call',people)"></ion-icon>
        <ion-grid @click="$emit('information',people)">
          <ion-row>
            <ion-col>
              <ion-label>{{people.name | capitalize}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-text>{{ people.phone }}</ion-text>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="auto" v-for="app in people.applications" :key="app">
              <ion-badge color="primary">{{app}}</ion-badge>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>
    </ion-item-sliding>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: {
    people: Object
  },
  methods: {}
};
</script>

<style>
ion-text {
  font-size: 0.78rem;
}

ion-chip {
  font-size: 0.65rem;
}
</style>