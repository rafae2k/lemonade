const common = {
  title: 'light' || 'dark',
  colors: {
    background: '#fff',
    text: {
      body: '#666666',
      heading: '#111111',
      link: '#115D8C'
    },
    primary: {
      brand: '#C81A78',
      100: '',
      90: '',
      80: '#B6116E',
      50: '#C81A78',
      20: '#D14B8F',
      10: ''
    },
    secondary: {
      brand: '',
      100: '',
      90: '',
      80: '',
      50: '#7EBC43',
      20: '',
      10: ''
    },
    semantic: {
      promo: '#F79552',
      success: '#2F9E51',
      warning: '#EED86F',
      error: '#E88DA6'
    }
  },
  fonts: {
    fontFamily: {
      sans: `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
      serif: '"Roboto Slab", serif'
    },
    fontSize: {
      /** @property font-size: 12px */
      xs: `font-size: 1.2rem; /* 12px */
           line-height: 1.6rem; /* 16px */`,

      /** @property font-size: 14px */
      sm: `font-size: 1.4rem; /* 14px */
           line-height: 2.0rem; /* 20px */`,

      /** @property font-size: 16px */
      base: `font-size: 1.6rem; /* 16px */  
             line-height: 2.4rem; /* 24px */`,

      /** @property font-size: 18px */
      md: `	font-size: 18rem; /* 18px */
            line-height: 28rem; /* 28px */`,

      lg: '1.25rem',

      xl: '1.5rem',

      '2xl': '2rem',
      '3xl': `font-size: 3rem; /* 30px */
              line-height: 3.6rem; /* 36px */`
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',

    /** @property 8px */
    base: '.8rem',

    /** @property 16px */
    md: '1.6rem',

    /** @property 32px */
    lg: '3.2rem',

    /** @property 48px */
    xl: '4.8rem',

    /** @property 80px */
    '2xl': '8rem',

    '3xl': '16rem'
  },
  borderRadius: {
    /** @property 2px */
    xs: '0.2rem',
    /** @property 4px */
    sm: '0.4rem',
    /** @property 8px */
    base: '.8rem',
    /** @property 16px */
    md: '1.6rem',
    /** @property 32px */
    lg: '3.2rem',
    /** @property 48px */
    xl: '4.8rem',
    /** @property 80px */
    '2xl': '8rem',
    /** @property 160px */
    '3xl': '16rem',
    /** @property 9999px */
    full: '9999px'
  },
  shadow: {
    /** @property box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2); */
    sm: 'box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);'
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const

export { common }
