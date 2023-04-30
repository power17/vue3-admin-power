import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  
  const base = command === 'build'? '/dist' : ''
  const baseUrl= command === 'build'? 'http://43.138.225.204:8080':'http://localhost:8080'
  console.log(base, command)
  return {
    server: {
      // proxy: {
      //   '/account': 'http://localhost:8080'
      // }
    },
    define: {
      'process.env': {
        'BASE_URL': baseUrl
      }
    },
    base: base, 
    plugins: [vue(),vueJsx(),viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: true,
    })],
  }

})
