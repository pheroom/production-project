import React, { memo, ReactElement, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import UserIcon from 'shared/assets/icons/user_circle.svg';
import ArticleIcon from 'shared/assets/icons/article_box.svg';
import FriendIcon from 'shared/assets/icons/friend.svg';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { LinkWithIcon } from 'widgets/Sidebar/ui/LinkWithIcon/LinkWithIcon';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

type ILinkData = [ReactElement, string, string]

const LinksForAuthUser: ILinkData[] = [
    [<UserIcon />, 'Моя страница', RoutePath.profile],
    [<ArticleIcon />, 'Статьи', RoutePath.about],
    [<FriendIcon />, 'Друзья', RoutePath.main],
];
const LinksForNotAuthUser: ILinkData[] = [[<ArticleIcon />, 'Статьи', RoutePath.about]];

interface SidebarProps{
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const authData = useSelector(getUserAuthData);

    const linksList = useMemo(() => {
        return (authData ? LinksForAuthUser : LinksForNotAuthUser).map(([icon, text, to]: ILinkData) => (
            <LinkWithIcon key={text + to} icon={icon} to={to} text={text} />
        ));
    }, [authData]);

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.links}>
                {linksList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});
