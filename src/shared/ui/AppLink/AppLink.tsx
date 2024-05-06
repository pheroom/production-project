import React, { FC, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo(({ className, children, to, theme = AppLinkTheme.PRIMARY, ...args }: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...args}
    >
        {children}
    </Link>
));
