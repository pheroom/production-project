import React, { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps{
    className?: string
    onClose: () => void
    isOpen: boolean
}

export const LoginModal: FC<LoginModalProps> = ({ className, onClose, isOpen }) => {
    const navigate = useNavigate();

    const onSuccess = () => {
        navigate(RoutePath.profile);
        onClose();
    };

    return (
        <Modal lazy onClose={onClose} isOpen={isOpen} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onSuccess} />
            </Suspense>
        </Modal>
    );
};
