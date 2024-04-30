import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">about</AppLink>
            </div>
        </div>
    );
}
