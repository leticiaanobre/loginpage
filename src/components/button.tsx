import * as React from 'react';

export interface  ButtonComponentProps {
    type: 'submit' | 'reset' | 'button';
    className: string;
    children: React.ReactNode;
    
}

export function ButtonComponent ({type, className, children}:  ButtonComponentProps) {
  return (
    <>
        <button 
            type={type} 
            className={className}
        >
        {children}
        </button>
    </>
  );
}
 
 