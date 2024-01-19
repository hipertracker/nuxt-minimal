import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', () => {
    const darkMode = ref(true);

    const currentTheme = computed(() => {
        return darkMode.value ? 'dark' : 'light';
    });


    function toggleDarkMode(theme: { global: { name: { value: string; }; }; }) {
        darkMode.value = !darkMode.value;
        theme.global.name.value = currentTheme.value
    }

    return {
        currentTheme,
        darkMode,
        toggleDarkMode,
    };
});
