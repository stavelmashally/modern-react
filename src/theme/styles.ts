import { Styles, mode } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global: props => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    '*': {
      margin: 0,
    },
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('gray.50', 'gray.800')(props),
      lineHeight: 1.5,
      WebkitFontSmoothing: 'antialiased',
    },
    'input, button, textarea, select': {
      font: 'inherit',
    },
    'p, h1, h2, h3, h4, h5, h6': {
      overflowWrap: 'break-word',
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
      _visited: {
        color: 'inherit',
      },
    },
  }),
};
