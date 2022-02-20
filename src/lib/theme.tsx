// theme.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { JSXElementStyles } from '@chakra-ui/theme-tools/src/component';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const globalStyles: JSXElementStyles = {
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

          _hover: {
            transition: '.3s ease-out',
            color: 'white',
            textDecoration: 'underline',
            backgroundSize: '100% 100%',
          },
        },
      },
      defaultProps: {
        // you can name it whatever you want
        variant: 'primary',
      },
    },
  },
});

export default theme;