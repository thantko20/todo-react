import React from 'react';

type OnClickFn = () => void;

interface Props {
  children?: React.ReactNode;
  onClick: OnClickFn;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 bg-indigo-500 text-indigo-50 text-sm font-bold rounded hover:bg-indigo-600'
    >
      {children}
    </button>
  );
};

export default Button;
