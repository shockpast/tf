import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    base: "/",
    cacheDir: "./cache",
    site: "https://tf.shckpst.ru",
    trailingSlash: "never",
})
