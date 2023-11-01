import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      'purple': '#5F60FF',
      "grey": "#666666",
      "green": "#186801",
      "brown": "#946c48",
      "skyblue": "#EAF0FF",
    },
  },
  plugins: [],
}
export default config
