import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>sign out</Button>
                <div className={cls.links}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>main</AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/about">about</AppLink>
                </div>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onCloseModal} theme={ButtonTheme.CLEAR_INVERTED}>sign in</Button>
            <LoginModal onClose={() => setIsAuthModal(false)} isOpen={isAuthModal} />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">about</AppLink>
            </div>
        </div>
    );
}
