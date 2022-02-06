// theme.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
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
    Link: {
      variants: {
        // you can name it whatever you want
        primary: ({ colorScheme = 'brand.blue' }) => ({
          color: colorScheme,
          _hover: {
            color: colorScheme,
          },
        }),
      },
      defaultProps: {
        // you can name it whatever you want
        variant: 'primary',
      },
    },
  },
});

export default theme;
