import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
// import viteCompression from 'vite-plugin-compression';
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteCompression(),
    //页面自动引入vue 插件
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: true,
      // 解决eslint报错问题
      eslintrc: {
        enabled: true
      }
    }),
    //element plus按需自动引入
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    //element plus按需自动引入
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      }
    },
    minify: 'terser', // 启用 terser 压缩  
    terserOptions: {
      compress: {
        drop_console: true, // 删除所有 console
        drop_debugger: true, // 删除 debugger  
      }
    },
    reportCompressedSize: false, // 关闭文件计算
    sourcemap: false, // 关闭生成map文件
  },
  output: {
    // 最小化拆分包
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return id.toString().split('node_modules/')[1].split('/')[0].toString();
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "./src/styles/var.scss" as *;
        `
      }
    }
  },
  // 跨域
  server: {
    //使用IP能访问
    // host: true,
    // 热更新
    hmr: true,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    // strictPort: false,
    // /** 是否自动打开浏览器 */
    // open: false,
    // /** 跨域设置允许 */
    // cors: true,
    // port: 80,
    //自定义代理规则
    proxy: {
      // 选项写法
      "/api": {
        target: "http://115.159.69.165:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace('/\/api/', "/api"),
      },
    },
  },
})
