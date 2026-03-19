import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

let agentationPlugin = () => null;
try {
  const mod = await import('vite-plugin-agentation');
  agentationPlugin = mod.agentationPlugin;
} catch {
  // 로컬에 vite-plugin-agentation이 없으면 건너뜀 (Vercel 등 CI 환경)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), agentationPlugin()],
})
