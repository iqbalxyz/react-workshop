import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store } from './redux/store';
import { lightTheme, darkTheme } from './theme/theme';
import App from './App';
import { useAppSelector } from './redux/hooks';

// Wrapper component that can access Redux state for theme
function ThemedApp(): JSX.Element {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);
