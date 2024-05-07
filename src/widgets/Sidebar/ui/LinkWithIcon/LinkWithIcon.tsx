import React, { FC, memo, ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './LinkWithIcon.module.scss';

interface LinkWithIconProps{
    className?: string
    to: string
    icon?: ReactElement
    text?: string
}

export const LinkWithIcon = memo(({ className, to, icon, text }: LinkWithIconProps) => {
    return (
        <Link className={classNames(cls.LinkWithIcon, {}, [className])} to={to}>
            {icon}
            <span>{text}</span>
        </Link>
    );
});
