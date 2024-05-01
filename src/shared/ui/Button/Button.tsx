import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize{
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (
    { className, children, square, size = ButtonSize.M, theme = ButtonTheme.CLEAR, ...args },
) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...args}>
            {children}
        </button>
    );
};
