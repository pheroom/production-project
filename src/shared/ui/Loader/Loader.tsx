import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps{
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <span className={classNames(cls.Loader, {}, [className])} />
);
