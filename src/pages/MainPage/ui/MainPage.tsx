import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBaundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1>{t('main')}</h1>
            <Counter />
            <br />
            <BugButton />
        </div>
    );
};

export default MainPage;
