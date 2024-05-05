import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Logo } from 'shared/ui/Logo/Logo';
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
                <div className="container">
                    <div className={cls.inner}>
                        <Logo className={cls.logo} />
                        <Button size={ButtonSize.S} onClick={onLogout}>Sign out</Button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className="container">
                <div className={cls.inner}>
                    <Logo className={cls.logo} />
                    <Button size={ButtonSize.S} onClick={onCloseModal}>Sign on</Button>
                    <LoginModal onClose={() => setIsAuthModal(false)} isOpen={isAuthModal} />
                </div>
            </div>
        </div>
    );
}
