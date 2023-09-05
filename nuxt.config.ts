// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
    "imports": {
        "dirs": ['stores']
    },
    // "runtimeConfig": {
    //     "token": '',
    //     "public": {
    //       "apiUrl": '',
    //     }
    //   },        
    // "vite": {
    //     "define": {
    //       "process.env": process.env,
    //     },
    //   },
    "vite": {
        plugins: [
          createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
            symbolId: '[dir]/[name]',
            customDomId: '__svg__icons__dom__',
          }),
        ],
      },
     
    "modules": [
        [
            '@pinia/nuxt',
            {
                'autoImports': ['defineStore', 'acceptHMRUpdate'],
            },
        ]
    ],
})


