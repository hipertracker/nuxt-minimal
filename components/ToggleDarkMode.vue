<script lang="ts" setup>
import {useTheme} from "vuetify";
import {useMainStore} from "~/stores/main.ts";

const theme = useTheme();
const store = useMainStore();
const {darkMode} = toRefs(store);


function toggleTheme() {
  store.toggleDarkMode(theme);

}
</script>


<template>
  <v-btn :ripple="false" icon @click="toggleTheme">
    <v-icon v-if="darkMode" medium>mdi-weather-night</v-icon>
    <v-icon v-else small>mdi-white-balance-sunny</v-icon>
  </v-btn>
</template>
