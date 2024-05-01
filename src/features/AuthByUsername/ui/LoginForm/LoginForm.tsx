import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus type="text" className={cls.input} />
            <Input type="text" className={cls.input} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t('sign in')}
            </Button>
        </div>
    );
};