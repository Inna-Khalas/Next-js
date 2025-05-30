import React from 'react';
import Sidebar from '../components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 w-full">{children}</div>
    </div>
  );
};

export default Layout;
