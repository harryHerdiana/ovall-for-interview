/* eslint no-use-before-define: 0 */

module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './icons/**/*.{js,jsx,ts,tsx}',
    './modules/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    fontFamily: {
      // sans: ['ReferenzGrotesk', 'Helvetica', 'system-ui'],
      // hand: ['ReferenzGrotesk', 'Helvetica', 'system-ui'],
      // body: ['ReferenzGrotesk', 'Helvetica', 'system-ui'],
      // hydeep: ['Montserrat', 'Helvetica', 'system-ui'],
      // main: ['ReferenzGrotesk', 'Helvetica', 'Arial', 'Verdana', 'system-ui']
      subtitleFont: ['SourceCodeProRegular', 'Courier New', 'Tahoma', 'monospace'],
      titleFont: ['SourceCodeProSemibold', 'Courier New', 'Tahoma', 'monospace'],
      tagFont: ['WorkSansMedium', 'Helvetica Neue', 'Helvetica', ' sans-serif'],
      subTagFont: ['WorkSansRegular', 'Helvetica Neue', 'Helvetica', ' sans-serif'],
      textFont: ['WorkSansLight', 'Helvetica Neue', 'Helvetica', ' sans-serif'],
      textFontBold: ['WorkSansSemiBold', 'Helvetica Neue', 'Helvetica', ' sans-serif']
      // hand: ['Helvetica', 'system-ui'],
      // body: ['Helvetica', 'system-ui'],
      // hydeep: ['Helvetica', 'system-ui'],
      // main: ['Helvetica', 'Arial', 'Verdana', 'system-ui']
    },
    fontSize: {
      xxs: '.625rem', // 10px for mobile subtext
      xs: '.75rem', // 12px for button subtext
      '2xs': '.813rem', // 13px for mobile countdown title
      sm: '.875rem', // 14px for tiny text on mobile + nav on desktop
      'sm-button': '.875rem',
      tiny: '1rem', // 16px for buttons and lists
      'tiny-button': '1rem', // 16px for buttons and lists
      base: '1.125rem', // 18px for H3, headlines etc
      lg: '1.25rem', //
      xl: '1.375rem', // 22px desktop teaser text
      '2xl': '1.625rem', // 26px for H1/H2 on mobile and tablet
      '3xl': '1.75rem', // 28px for H1 on mobile
      '4xl': '2rem', // 32px for H2 on desktop and H1 on tablet
      '5xl': '2.6rem', // 38px for H1 on desktop
      '6xl': '3.5rem', // 80px, for H1 on desktop
      xxl: '4rem',
      '2xxl': '5rem', // 56px
      '3xxl': '7rem',
      'stage-variable': 'calc(56px + (56 - 38) * (100vw - 1280px) / (1536 - 1280));'
    },
    backgroundSize: {
      contain: 'contain',
      '100px': '100px'
    },
    extend: {
      lineHeight: {
        headline: '1.15'
      },
      screens: {
        all: '1px',
        xxl: '1360px',
        'wxga+': '1440px',
        fullhd: '1920px',
        'fullhd+': '2160px',
        wqhd: '2560px'
      },
      opacity: {
        15: 0.15
      },
      dropShadow: {
        '3xl-smalldark': '0 0px 10px rgba(0, 0, 0, 0.75)',
        '3xl': '0 5px 15px rgba(0, 0, 0, 0.75)'
      },
      boxShadow: {
        top: '0px -6px 6px 0px rgba(0,0,0,0.12)',
        bottom: '0px 0px 12px 0px rgba(0,0,0,0.12)',
        '2xl-soft': '0 25px 50px -12px rgba(0, 0, 0, 0.07)'
      },
      height: {
        inherit: 'inherit',
        stage: '75vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '600px': '600px',
        '500px': '500px',
        '440px': '440px',
        '360px': '360px',
        '300px': '300px',
        '245px': '245px',
        '235px': '235px',
        '190px': '190px',
        '150px': '150px',
        '120px': '120px',
        0: '0',
        18: '4.5rem'
      },
      minHeight: {
        stage: '75vh',
        'stage-tablet': '480px',
        'stage-desktop': '620px',
        'product-card': '528px',
        '235px': '235px',
        '190px': '190px'
      },
      width: {
        fit: 'fit-content',
        '345px': '345px'
      },
      spacing: {
        '-600px': '-600px',
        '-500px': '-500px',
        '600px': '600px',
        '500px': '500px',
        '-25vh': '-25vh',
        '20pc': '20%',
        '30pc': '30%'
      },
      margin: {
        '100vw': '100vw'
      },
      maxHeight: {
        'stage-tablet': '620px',
        'stage-desktop': '720px',
        'stage-product-desktop': '620px',
        'slide-mobile': '460px',
        '800px': '800px',
        content: 'max-content',
        112: '28rem',
        '570px': '570px',
        '380px': '380px',
        '400px': '400px',
        '245px': '245px',
        '235px': '235px',
        '190px': '190px',
        '750px': '750px',
        '300px': '300px'
      },
      maxWidth: {
        site: '1440px',
        fullhd: '1920px',
        'fullhd+': '2160px',
        wqhd: '2560px',
        'content-xl': '1440px',
        'content-lg': '1140px',
        'content-sm': '946px',
        img: '400px',
        '500px': '500px',
        '570px': '570px',
        '345px': '345px',
        '300px': '300px',
        'img-sm': '300px',
        'img-slider-desktop': '600px',
        '200px': '200px',
        '150px': '150px',
        full: '100%'
      },
      minWidth: {
        site: '1440px',
        fullhd: '1920px',
        'fullhd+': '2160px',
        wqhd: '2560px',
        'content-xl': '1440px',
        'content-lg': '1140px',
        'content-sm': '946px',
        img: '400px',
        '500px': '500px',
        '570px': '570px',
        'img-sm': '300px',
        'img-slider-desktop': '600px'
      },
      zIndex: {
        0: 0,
        10: 10
      },
      colors: {
        urgrow: {
          'turquoise-200': '#E1F5F1',
          'turquoise-700': '#14816b',
          'turquoise-500': '#1bad90'
        },
        lavender: {
          500: '#8582AE',
          700: '#68649A'
        },
        gray: {
          200: '#F4F3F2', // for background sections
          300: '#EEEEEE', // for background
          650: '#7C7C7C',
          '700-75': 'rgba(100,100,100,0.85)',
          '900-75': 'rgba(55,55,55,0.65)',
          '900-45': 'rgba(55,55,55,0.45)',
          700: '#707070'
        },
        greenLink: '#9cd4b9',
        'Ovall-Pink': {
          500: '#eebdb7'
        },
        'Ovall-Blue': {
          500: '#84d3d0'
        },
        'Ovall-Turquoise': {
          500: '#c6cedf'
        },

        green: {
          500: '#7E9F3C',
          600: '#7BB505'
        },
        darkyellow: {
          500: '#D9BC1B',
          600: '#E6A805'
        },
        darkgreen: {
          500: '#638842'
        },
        elephant: {
          600: '#71695B'
        },
        'pine-green': {
          300: '#AFB191',
          500: '#80896E', // background for textboxes
          700: '#33603a', // background for buttons and for green text
          900: 'rgba(51,58,1,0.6)'
        },
        orange: {
          200: '#FFF4E5',
          500: '#FAA42E',
          600: '#E59D3C',
          700: '#E28200'
        },
        brown: {
          500: '#CE8A2E',
          '600-90': 'rgba(97,79,56,0.90)',
          '600-75': 'rgba(97,79,56,0.75)'
        },
        darkbrown: {
          600: '#5c4b42'
        },
        purple: {
          500: '#AA667B'
        },
        beige: {
          100: '#F8F6F0',
          200: '#F8F5EC', // background for sections
          300: '#F2EBDA' // background for text boxes and buttons
        }
        // 'ovall-green': {
        //   light: '#83886F',
        //   DEFAULT: 'rgba(79, 93, 51)'
        // }
      },
      backgroundImage: () => ({
        herbs: "url('/images/bg-benefits-herbs.jpg')",
        'stage-powergreens-desktop': "url('/images/stage-powergreens-xl.jpg')",
        'stage-powergreens': "url('/images/stage-powergreens.jpg')"
      })
    }
  }, // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')]
}
