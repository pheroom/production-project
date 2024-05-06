import React, { ButtonHTMLAttributes, FC, memo } from 'react';
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
    mode?: ButtonMode
}

export const Button = memo((
    { className, children, size = ButtonSize.M, mode = ButtonMode.PRIMARY,
        theme = ButtonTheme.ACCENT, disabled, ...args }: ButtonProps,
) => {
    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[mode], cls[theme], cls[size]])}
            disabled={disabled}
            {...args}
        >
            <span>
                {children}
            </span>
        </button>
    );
});
