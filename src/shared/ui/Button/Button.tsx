import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton{
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({
    className, children, theme = ThemeButton.CLEAR, ...args
}) => (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...args}>
        {children}
    </button>
);

export default Button;
