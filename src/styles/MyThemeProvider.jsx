import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import PropTypes from 'prop-types';
import { GlobalStyles } from './global-styles';
import { Normalize } from 'styled-normalize';

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
      <Normalize />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
