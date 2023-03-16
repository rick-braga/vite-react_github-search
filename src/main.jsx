import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';

import MyRoutes from './MyRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <MyRoutes />
    </MyThemeProvider>
  </React.StrictMode>,
);
