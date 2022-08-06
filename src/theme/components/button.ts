import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'lg',
    borderColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    _disabled: {
      cursor: 'not-allowed',
    },
    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
    _focus: {
      outline: 0,
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 2,
    },
  },
  variants: {
    primary: {
      bg: 'primary.500',
      color: 'white',
      _hover: {
        bg: 'primary.600',
        _disabled: {
          bg: 'grey.300',
          color: 'grey.500',
          _loading: {
            bg: 'primary.600',
            color: 'white',
          },
        },
      },
      _active: {
        bg: 'primary.700',
      },
      _disabled: {
        bg: 'grey.300',
        color: 'grey.500',
        _loading: {
          bg: 'primary.600',
          color: 'white',
        },
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
      bg: 'transparent',
    },
    ghost: props => ({
      bg: 'transparent',
      _hover: {
        bg: mode('gray.200', 'gray.700')(props),
      },
    }),
  },
  defaultProps: { variant: 'primary', size: 'md' },
};

export default Button;
