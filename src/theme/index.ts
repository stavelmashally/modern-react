import { extendTheme } from '@chakra-ui/react';
import * as components from './components';
import foundations from './foundations';
import { styles } from './styles';
import { config } from './config';
import { semanticTokens } from './semantic-tokens';

const overrides = {
  config,
  styles,
  semanticTokens,
  ...foundations,
  components: { ...components },
};

export default extendTheme(overrides);
