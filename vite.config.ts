import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// fix the error: echo "declare module 'postcss-px-to-viewport';" > node_modules/postcss-px-to-viewport/index.d.ts
import postCssPXtoViewport from 'postcss-px-to-viewport';
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import tailwindcss from "tailwindcss";
import autoPrefixer from "autoprefixer";

const svgColor = (svg: string) => svg.replace(/stroke="#[^"]{6}"/i, 'stroke="currentColor"')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        // globalsPropValue: true,
      },
      resolvers: [VantResolver()],
      dirs: ['src/utils', 'src/stores']
    }),
    Components({
      resolvers: [
        VantResolver(),
        IconsResolver({
          prefix: 'icon',
          customCollections: ['app','order','service'],
        }),
      ],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
      directoryAsNamespace: true,
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        "app": FileSystemIconLoader('src/assets/icons/app', svgColor),
        "order": FileSystemIconLoader('src/assets/icons/order', svgColor),
        "service": FileSystemIconLoader('src/assets/icons/service', svgColor),
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoPrefixer,
        postCssPXtoViewport({
          unitToConvert: 'px', // 要转换的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名
          minPixelValue: 1, // 小于该值的不会被转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/peace': 'http://192.168.0.149:8282',
    }
  }
})
