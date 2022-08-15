import { BrowserRouter as RouterProvider } from 'react-router-dom';

import AppRouter from './routes';

const App = () => {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  );
};

export default App;
