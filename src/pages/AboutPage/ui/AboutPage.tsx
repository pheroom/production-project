import React from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';

const AboutPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            {t('about')}
        </div>
    );
};

export default AboutPage;
