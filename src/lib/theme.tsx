// theme.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const globalStyles = {
  address: {
    fontStyle: 'normal',
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: globalStyles,
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    brand: {
      black: '#000021',
      blue: '#015D96',
      red: '#E22C3F',
    },
    gray: {
      100: '#F5F5F5',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '900',
      },
    },
    Link: {
      variants: {
        // you can name it whatever you want
        primary: ({ colorScheme = 'brand.blue', textDecoration = 'underline' }) => ({
          color: colorScheme,
          textDecoration,
          _hover: {
            color: colorScheme,
            textDecoration,
          },
        }),

        topNavigation: {
          fontWeight: '600',
          fontSize: '18px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          backgroundImage: 'linear-gradient(#015D96, #015D96)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0%',
          '@media screen and (min-width: 48em)': {
            _hover: {
              transition: '.3s ease-out',
              color: 'white',
              textDecoration: 'underline',
              backgroundSize: '100% 100%',
            },
          },
        },
        footerNavigation: {
          fontWeight: '700',
          fontSize: '18px',
          margin: '20px',
        },
        footerQuickLinks: {
          fontWeight: '700',
          fontSize: '13px',
          margin: '20px',
          spacing: 1,
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Button: {
      variants: {
        primary: {
          bg: 'brand.blue',
          color: 'white',
          padding: 7,
        },
        openingHours: {
          color: 'brand.blue',
          height: 'auto',
          width: '226px',
          border: '1px solid',
          borderColor: 'brand.blue',
          backgroundColor: 'white',
          borderRadius: '5px',
          padding: '10px 15px',
          fontSize: '18px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          outline: 'none',
        },
      },
    },
    OpeningTimeSchedule: {
      variants: {
        default: {
          pr: '16px',
          w: '50%',
          h: 'auto',
        },
        cover: {
          pr: '0',
          w: '100%',
          h: '100%',
          position: 'absolute',
          backgroundColor: 'white',
        },
      },
    },
  },
});
export default theme;
