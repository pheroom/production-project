import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo(({ className, value, onChange, type = 'text', ...args }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div>
            <input
                onChange={onChangeHandler}
                value={value}
                type={type}
                className={classNames(cls.Input, {}, [className])}
                {...args}
            />
        </div>
    );
});
