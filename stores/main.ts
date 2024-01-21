import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
    const darkMode = ref(true); // default to dark mode

    console.log('isServer', typeof window === 'undefined');

    function toggleDarkMode () {
        darkMode.value = !darkMode.value;
    }

    return {
        darkMode,
        toggleDarkMode,
    };
}, {
    persist: {
        storage: persistedState.localStorage,
    }
});

