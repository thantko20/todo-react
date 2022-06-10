import React from 'react';

type OnClickFn = () => void;

interface Props {
  children?: React.ReactNode;
  onClick: OnClickFn;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, variant = 'primary' }: Props) => {
  return (
    <>
      {variant === 'primary' && (
        <button
          onClick={onClick}
          className='px-8 py-3 font-semibold bg-indigo-500 text-indigo-50 rounded tracking-wider transition-colors hover:bg-indigo-600'
        >
          {children}
        </button>
      )}
      {variant === 'secondary' && (
        <button
          onClick={onClick}
          className='px-8 py-3 bg-indigo-50 font-semibold text-indigo-500 rounded tracking-wider transition-colors hover:bg-indigo-100'
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
