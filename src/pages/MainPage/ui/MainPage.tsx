import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBaundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            {t('main')}
            <br />
            <Counter />
            <BugButton />
        </div>
    );
};

export default MainPage;
