import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Any fetch("/api/...") from the app gets forwarded here, server-side,
      // before it ever reaches the browser. That means the browser only
      // ever talks to its own origin (localhost:5173) — so the backend
      // doesn't need CORS configured at all during development.
      //
      // 3000 is a placeholder — update it to whatever port the Express
      // server actually listens on once your colleague sets that up
      // (e.g. the port passed to app.listen(...)).
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
