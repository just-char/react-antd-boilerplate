import { useRoutes } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';

const AppRouter = () => {
  const element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);
  return <>{element}</>;
};

export default AppRouter;
