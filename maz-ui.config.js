// maz-ui.config.ts
import { defineConfig } from '@mazui/cli'

export default defineConfig({
  outputCssFilePath: './assets/css/maz-ui-variables.css',
  theme: {
    colors: {
      primary: '#a78bfa',
      secondary: '#71717a',
      info: '#22d3ee',
      success: '#10b981',
      warning: '#facc15',
      danger: '#ef4444',
  },
  fontFamily: `Outfit, system-ui, sans-serif`
}}
)