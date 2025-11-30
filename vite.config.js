import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
        allowedHosts: ['toz.alexis.games']
    },
    preview: {
        host: true,
        port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
        allowedHosts: ['toz.alexis.games']
    }
})
