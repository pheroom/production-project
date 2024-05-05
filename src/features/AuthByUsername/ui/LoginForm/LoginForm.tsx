import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Logo from 'shared/assets/icons/big-logo.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Logo />
                <p className={cls.title}>Вход ВКонтакте</p>
                {error && <Text text="Неверный логин или пароль" theme={TextTheme.ERROR} />}
                <Input
                    placeholder="Имя аккаунта"
                    value={username}
                    onChange={onChangeUsername}
                    autoFocus
                    type="text"
                    classNameBox={cls.input}
                />
                <Input
                    placeholder="Пароль"
                    value={password}
                    onChange={onChangePassword}
                    type="text"
                    classNameBox={cls.input}
                />
                <Button disabled={isLoading} size={ButtonSize.L} onClick={loginClick} className={cls.loginBtn}>
                    {t('Sign on')}
                </Button>
                <div className={cls.sep} />
                <Button
                    disabled={isLoading}
                    theme={ButtonTheme.POSITIVE}
                    size={ButtonSize.L}
                    onClick={loginClick}
                    className={cls.loginBtn}
                >
                    {t('Sign in')}
                </Button>

            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
