import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  let base = ''
  base = command === 'build'? '/dist' : ''
  console.log(base, command)
  return {
    base: base, 
    plugins: [vue(),vueJsx(),viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: true,
    })],
  }

})
