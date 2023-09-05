// https://nuxt.com/docs/api/configuration/nuxt-config
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
    "vite": {
        "define": {
          "process.env": process.env,
        },
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


