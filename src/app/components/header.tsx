import Image from 'next/image';
import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">
        {children}
      </h1>
      <div>
        <div>
          <p>test</p>
          <p>test@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
