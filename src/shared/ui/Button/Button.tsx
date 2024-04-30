import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton{
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, children, theme = ThemeButton.CLEAR, ...args }) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...args}>
            {children}
        </button>
    );
};
