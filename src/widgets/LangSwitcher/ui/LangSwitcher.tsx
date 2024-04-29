import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t('trans')}
        </Button>
    );
};

export default LangSwitcher;
