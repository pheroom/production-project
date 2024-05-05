import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LogoIcon from 'shared/assets/icons/logo-with-text.svg';
import LightLogoIcon from 'shared/assets/icons/logo-with-black-text.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import cls from './Logo.module.scss';

interface LogoProps{
    className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
    const { theme } = useTheme();

    return (
        <Link className={classNames(cls.Logo, {}, [className])} to="/">
            {theme === Theme.LIGHT
                ? <LightLogoIcon />
                : <LogoIcon />}
        </Link>

    );
};
