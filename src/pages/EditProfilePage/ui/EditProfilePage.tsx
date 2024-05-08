import React, { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    profileActions,
    profileReducer,
    updateProfileData,
} from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Input } from 'shared/ui/Input/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonMode, ButtonTheme } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import cls from './EditProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface EditProfilePageProps{
    className?: string
}

const EditProfilePage: FC<EditProfilePageProps> = ({ className }) => {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        if (!data) {
            dispatch(fetchProfileData());
        }
    }, [dispatch, data]);

    const resetEdit = useCallback(() => {
        dispatch(profileActions.resetForm());
    }, [dispatch]);

    const saveEdit = useCallback(async () => {
        const res = await dispatch(updateProfileData());
        if (res.meta.requestStatus === 'fulfilled') {
            navigator(RoutePath.profile);
        }
    }, [dispatch, navigator]);

    const onChangeUsername = useCallback((username) => {
        dispatch(profileActions.updateProfile({ username }));
    }, [dispatch]);

    const onChangeFirstname = useCallback((firstname) => {
        dispatch(profileActions.updateProfile({ firstname }));
    }, [dispatch]);

    const onChangeLastname = useCallback((lastname) => {
        dispatch(profileActions.updateProfile({ lastname }));
    }, [dispatch]);

    const onChangeStatus = useCallback((status) => {
        dispatch(profileActions.updateProfile({ status }));
    }, [dispatch]);

    const onChangeBirthdate = useCallback((birthdate) => {
        dispatch(profileActions.updateProfile({ birthdate }));
    }, [dispatch]);

    const onChangeCity = useCallback((city) => {
        dispatch(profileActions.updateProfile({ city }));
    }, [dispatch]);

    if (error) {
        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.EditProfilePage, {}, [className, cls.withError])}>
                    <Text theme={TextTheme.ERROR} title="Error" />
                </div>
            </DynamicModuleLoader>
        );
    }
    if (isLoading || !data) {
        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.EditProfilePage, {}, [className, cls.withLoader])}>
                    <Loader />
                </div>
            </DynamicModuleLoader>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.EditProfilePage, {}, [className])}>
                <h1 className={cls.title}>Редактирование профиля</h1>
                <div className={cls.avatarBox}>
                    <Avatar src={data.avatar} size={92} />
                    <p className={cls.avatarBtn}>загрузить фото</p>
                </div>
                <div className={cls.inputBox}>
                    <p className={cls.inputLabel}>username</p>
                    <Input className={cls.input} onChange={onChangeUsername} value={data.username} />
                </div>
                <div className={cls.inputBox}>
                    <p className={cls.inputLabel}>status</p>
                    <Textarea
                        className={cls.statusInput}
                        onChange={onChangeStatus}
                        value={data.status}
                        maxLength={140}
                        autoComplete="off"
                    />
                </div>
                <div className={cls.inputLine}>
                    <div className={cls.inputBox}>
                        <p className={cls.inputLabel}>first name</p>
                        <Input fullWidth className={cls.input} onChange={onChangeFirstname} value={data.firstname} />
                    </div>
                    <div className={cls.inputBox}>
                        <p className={cls.inputLabel}>last name</p>
                        <Input fullWidth className={cls.input} onChange={onChangeLastname} value={data.lastname} />
                    </div>
                </div>
                <div className={cls.inputLine}>
                    <div className={cls.inputBox}>
                        <p className={cls.inputLabel}>city</p>
                        <Input fullWidth className={cls.input} onChange={onChangeCity} value={data.city} />
                    </div>
                    <div className={cls.inputBox}>
                        <p className={cls.inputLabel}>birthdate</p>
                        <Input fullWidth className={cls.input} onChange={onChangeBirthdate} value={data.birthdate} />
                    </div>
                </div>
                <div className={cls.actions}>
                    <Button onClick={saveEdit}>Сохранить</Button>
                    <Button
                        onClick={resetEdit}
                        theme={ButtonTheme.NEGATIVE}
                        mode={ButtonMode.SECONDARY}
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default EditProfilePage;
