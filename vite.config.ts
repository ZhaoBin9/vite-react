import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'apis': path.resolve(__dirname, 'src/services/apis'),
      'style': path.resolve(__dirname, 'src/styles'),
      'page': path.resolve(__dirname, 'src/pages'),
      'types': path.resolve(__dirname, 'src/types')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      '/api': {
        target: 'http://tingapi.ting.baidu.com/v1/restserver/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
