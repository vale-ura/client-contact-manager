<template>
  <div id="autoCompleteComponent">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Aplicações</ion-label>
        <ion-select @ionChange="onDigitAutoComplete" multiple="true">
          <ion-select-option v-for="item in list" :key="item" :value="item">{{ item }}</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
  </div>
</template>
<script>
import { isBlank } from "voca";
export default {
  name: "autoCompleteComponent",
  props: {
    list: Array
  },
  methods: {
    onDigitAutoComplete(option) {
      let {
        detail: { value }
      } = option;
      if (isBlank(value)) return;
      this.$emit("selecteds", value);
    }
  }
};
</script>
<style>
</style>
