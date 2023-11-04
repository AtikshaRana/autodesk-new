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
          'grad-blue-and-black': 'linear-gradient(180deg, rgba(0,18,77,1) 20%, rgba(0,0,0,1) 100%)',
          'grad-black-to-blue':'linear-gradient(0deg, rgba(0,18,77,1) 59%, rgba(0,0,0,1) 100%)',
      },
      colors:{
        'purple': '#5F60FF',
        "grey": "#666666",
        "green": "#186801",
        "brown": "#946c48",
        "skyblue": "#EAF0FF",
        "blue": '#2E69FF',
        'black':'#000',
        'white':'#fff',
        'oceanGreen': '#79F7C6',
        'darkGray': '#1E293B',
        'pink': '#FF3B84',
        'yello':'#FFCA36',
        'darkBlue': '#00124D',
      },
      width: {
        'mainContent':'calc(100% + 550px)',
        'threeCardWrap':'calc(100% + 20px)',
        'threeCard': 'calc(33.33% - 20px)',
        'halfWidth':'calc(50% - 20px)'
      },
      screens: {
        'bcd': {'max': '1399px'},
        // => @media (max-width: 1399px) { ... }
        'bcu': {'min': '1399px'},
        // => @media (max-width: 1399px) { ... }

        'elcd': {'max': '1399px'},
        // => @media (max-width: 1399px) { ... }
        'elcu': {'min': '1399px'},
        // => @media (max-width: 1399px) { ... }

        'ldd': {'max': '1270px'},
        // => @media (max-width: 1270px) { ... }
        'ldu': {'min': '1270px'},
        // => @media (max-width: 1270px) { ... }

        'cd': {'max': '1170px'},
        // => @media (max-width: 1279px) { ... }
        'cu': {'min': '1170px'},
        // => @media (min-width: 1279px) { ... }

        'dmd': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
        'dmu': {'min': '1024px'},
        // => @media (min-width: 1024px) { ... }

        'desktop': {'min': '992px', 'max': '1024px'},
        // => @media (min-width: 992px and max-width: 1024px) { ... }

        'dd': {'max': '991px'},
        // => @media (max-width: 991px) { ... }
        'du': {'min': '991px'},
        // => @media (min-width: 991px) { ... }

        'tablet': {'min': '768px', 'max': '991px'},
        // => @media (min-width: 768px and max-width: 991px) { ... }

        'td': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'tu': {'min': '767px'},
        // => @media (min-width: 767px) { ... }

        'phablet': {'min': '596px', 'max': '767px'},
        // => @media (min-width: 596px and max-width: 767px) { ... }

        'phd': {'max': '595px'},
        // => @media (max-width: 595px) { ... }
        'phu': {'min': '595px'},
        // => @media (min-width: 595px) { ... }

        'phone': {'min': '481px', 'max': '595px'},
        // => @media (min-width: 481px and max-width: 595px) { ... }

        'pd': {'max': '480px'},
        // => @media (max-width: 480px) { ... }
        'pu': {'min': '480px'},
        // => @media (min-width: 480px) { ... }

      },
  
    },
    
  },
  plugins: [],
}
export default config
