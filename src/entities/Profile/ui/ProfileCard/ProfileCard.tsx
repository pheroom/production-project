import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CityIcon from 'shared/assets/icons/place.svg';
import { Button, ButtonMode } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps{
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
}

export const ProfileCard = memo(({ className, data, isLoading, error }: ProfileCardProps) => {
    const navigator = useNavigate();

    const onEdit = useCallback(() => {
        navigator(RoutePath.edit_profile);
    }, [navigator]);

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.withError])}>
                <Text theme={TextTheme.ERROR} title="Error" />
            </div>
        );
    }
    if (isLoading || !data) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.withLoader])}>
                <Loader />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Avatar className={cls.avatar} size={150} src={data.avatar} />
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
                    <Button onClick={onEdit} mode={ButtonMode.SECONDARY}>Редактировать профиль</Button>
                </div>
            </div>
        </div>
    );
});
