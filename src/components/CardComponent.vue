<template>
  <div id="card-component">
    <ion-item-sliding>
      <ion-item>
              <ion-icon color="secondary" name="call"></ion-icon>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>{{people.name | capitalize}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-text>{{ people.phone }}</ion-text>
            </ion-col>
          </ion-row>
          
          <ion-row>
          </ion-row>
          <ion-row>
            <ion-col size="auto" v-for="app in people.applications" :key="app">
              <ion-badge color="primary">{{app}}</ion-badge>
            </ion-col>
          </ion-row>
        </ion-grid>
              <ion-icon color="primary" name="information-circle-outline"></ion-icon>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Edit</ion-item-option>
      </ion-item-options>
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

ion-badge {
  font-size: 0.65rem;
}
</style>