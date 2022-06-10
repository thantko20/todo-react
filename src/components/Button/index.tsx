import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ variant = 'primary', children, ...props }: Props) => {
  return (
    <>
      {variant === 'primary' && (
        <button
          {...props}
          className='px-8 py-3 font-semibold bg-indigo-500 text-indigo-50 rounded tracking-wider transition-colors hover:bg-indigo-600'
        >
          {children}
        </button>
      )}
      {variant === 'secondary' && (
        <button
          {...props}
          className='px-8 py-3 bg-indigo-50 font-semibold text-indigo-500 rounded tracking-wider transition-colors hover:bg-indigo-100'
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
