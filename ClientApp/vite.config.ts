import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteDotNet from 'vite-dotnet'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteDotNet("src/main.tsx") //This parameter is the entrypoint of your application
    ],
})