import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postcsspxtoviewport from 'postcss-px-to-viewport'



export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          // unitPrecision: 6, // 转换后的精度，即小数点位数
          // propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          // viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          // fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          // selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          // minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          // mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          // replace: true, // 是否转换后直接更换属性值
          // // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          // // exclude: [],
          // include: [], //如果设置了include，那将只有匹配到的文件才会被转换
          // landscape: false // 是否处理横屏情况
        })
      ]
    },
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@r': path.resolve(__dirname, './src/router'),
      '@s': path.resolve(__dirname, './src/store'),
      '@c':path.resolve(__dirname, './src/components'),
      '@l':path.resolve(__dirname,'./src/lang'),
      '@v':path.resolve(__dirname,'./src/view')
    }
  }

})
