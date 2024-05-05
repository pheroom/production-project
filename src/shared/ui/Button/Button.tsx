import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonMode{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
    TERTIARY = 'tertiary',
    LINK = 'link',
}

export enum ButtonTheme{
    ACCENT = 'accent',
    POSITIVE = 'positive',
}

export enum ButtonSize{
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (
    { className, children, size = ButtonSize.M, theme = ButtonTheme.ACCENT, disabled, ...args },
) => {
    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...args}
        >
            <span>
                {children}
            </span>
        </button>
    );
};
