import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10 justify-center pt-10 text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <h1 className="text-center text-5xl">Hello Antd & Tailwind CSS</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
