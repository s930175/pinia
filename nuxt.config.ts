// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    "imports": {
        "dirs": ['stores']
    },
    "runtimeConfig": {
        "token": '1234567890',
        "public": {
          "apiUrl": 'https://www.mike.com',
        }
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


