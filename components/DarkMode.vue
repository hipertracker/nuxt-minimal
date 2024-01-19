<script setup lang="ts">
import { useTheme } from "vuetify";
import {useMainStore} from "~/stores/main.ts";
const theme = useTheme();
const store = useMainStore();
const {darkMode} = toRefs(store);
console.log("darkMode", darkMode);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>


<template>
  <v-btn icon @click="toggleTheme" :ripple="false">
    <v-icon v-if="theme.global.current.value.dark" medium>mdi-weather-night</v-icon>
    <v-icon v-else small>mdi-white-balance-sunny</v-icon>
  </v-btn>
</template>
