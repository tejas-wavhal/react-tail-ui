import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'success' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
    const baseStyles = 'px-4 py-2 rounded font-semibold';
    const variantStyles = {
        primary: 'bg-blue-500 text-white',
        ghost: 'bg-gray-500 text-white',
        success: 'bg-green-500 text-white',
        danger: 'bg-red-500 text-white',
    };

    return (
        <button
            className={clsx(baseStyles, variantStyles[variant], className)}
            {...props}
        />
    );
};

export default Button;
