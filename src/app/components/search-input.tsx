import Image from 'next/image';
import React from 'react';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchInput = ({ onSearchClick, ...props }: SearchInputProps) => {
  return (
    <div className="relative w-96">
      <input
        {...props}
        type="text"
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
        placeholder="Search..."
      />
      <button
        type="button"
        onClick={onSearchClick}
        className="absolute top-0	right-0 p-3"
      >
        <Image
          width={20}
          height={20}
          src="icons/search-bar.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
