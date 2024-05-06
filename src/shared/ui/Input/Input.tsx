import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string
    value?: string
    onChange?: (value: string) => void
    classNameBox?: string
    fullWidth?: boolean
}

export const Input = memo((
    { className, value, onChange, classNameBox, fullWidth = true, type = 'text', ...args }: InputProps,
) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Box, {}, [classNameBox])}>
            <input
                onChange={onChangeHandler}
                value={value}
                type={type}
                className={classNames(cls.Input, { [cls.fullWidth]: fullWidth }, [className])}
                {...args}
            />
        </div>
    );
});
