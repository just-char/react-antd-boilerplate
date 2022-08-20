import { BrowserRouter as RouterProvider } from 'react-router-dom';

import QueryProvider from './providers/query';
import AppRouter from './routes';

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider>
        <AppRouter />
      </RouterProvider>
    </QueryProvider>
  );
};

export default App;
