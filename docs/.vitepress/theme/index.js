import './tailwind.postcss'
import "vue3-tailwind/dist/style.css"

import DefaultTheme from 'vitepress/theme'
import {Vue3Tailwind} from "vue3-tailwind";

export default { ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(Vue3Tailwind)
    }
}