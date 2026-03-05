import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
// This is the BASE line that makes your GitHub link work
base: '/minerals-rocks-website/',

plugins: [
react(),
tailwindcss(),
],
resolve: {
alias: {
// This fixes the 'path' and 'dirname' error by using a simple shortcut
'@': '/src',
},
},
assetsInclude: ['/*.svg', '/*.csv'],
})