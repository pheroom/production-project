import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBaundary';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            {t('main')}
            <BugButton />
        </div>
    );
};

export default MainPage;
