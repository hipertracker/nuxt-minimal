import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', () => {
    const darkMode = ref(true);

    function toggleDarkMode() {
        darkMode.value = !darkMode.value;
    }

    function setDarkMode() {
        darkMode.value = true;
    }

    function setLightMode() {
        darkMode.value = false;
    }

    return {
        darkMode,
        toggleDarkMode,
        setDarkMode,
        setLightMode
    };
});
