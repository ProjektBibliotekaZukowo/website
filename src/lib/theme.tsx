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
      },
      defaultProps: {
        // you can name it whatever you want
        variant: 'primary',
      },
    },
  },
});

export default theme;
