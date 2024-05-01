import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps{
    className?: string
    onClose: () => void
    isOpen: boolean
}

export const LoginModal: FC<LoginModalProps> = ({ className, onClose, isOpen }) => {
    return (
        <Modal lazy onClose={onClose} isOpen={isOpen} className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    );
};
