import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { agentationPlugin } from 'vite-plugin-agentation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), agentationPlugin()],
})
