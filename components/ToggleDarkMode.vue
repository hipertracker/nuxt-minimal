<script lang="ts" setup>
import { useTheme } from "vuetify";
import { useMainStore } from "~/stores/main";

const theme = useTheme();
const store = useMainStore();
const { darkMode } = toRefs(store);

const dark = ref(true); // necessary to avoid server vs client data mismatch in Nuxt

function toggle() {
  dark.value = !dark.value;
  store.toggleDarkMode();
  theme.global.name.value = dark.value ? "dark" : "light";
}

onMounted(() => {
  dark.value = darkMode.value;
  theme.global.name.value = dark.value ? "dark" : "light";
});
</script>

<template>
  <div>
    <v-btn icon @click="toggle">
      <v-icon v-if="dark" medium>mdi-weather-night</v-icon>
      <v-icon v-else small>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </div>
</template>
