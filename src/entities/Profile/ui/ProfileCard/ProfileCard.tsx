import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import CityIcon from 'shared/assets/icons/place.svg';
import { Button, ButtonMode } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps{
    className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    if (isLoading) {
        return <div />;
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar ? <img className={cls.avatar} src={data.avatar} alt="" /> : <div>ava not exist</div>}
            <div className={cls.main}>
                <div className={cls.info}>
                    {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                    <p className={cls.name}>{(data?.lastname ? `${data?.lastname} ` : '') + data?.firstname}</p>
                    <p className={cls.status}>{data?.status}</p>
                    <div className={cls.cityBox}>
                        <CityIcon className={cls.cityIcon} />
                        <span className={cls.cityText}>{data?.city}</span>
                    </div>
                </div>
                <div className={cls.actions}>
                    <Button mode={ButtonMode.SECONDARY}>Редактировать профиль</Button>
                </div>
            </div>
        </div>
    );
});
