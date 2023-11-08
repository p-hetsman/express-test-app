import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const port = parseInt(env.PORT ?? '3000', 10);
  const apiUrl = env.API_URL ?? 'http://localhost:3003';

  return {
    server: {
      port,
      proxy: {
        '/api': apiUrl,
      },
    },
    plugins: [
      react(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
  };
});
