import React, { ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import UserIcon from 'shared/assets/icons/user_circle.svg';
import ArticleIcon from 'shared/assets/icons/article_box.svg';
import FriendIcon from 'shared/assets/icons/friend.svg';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { LinkWithIcon } from 'widgets/Sidebar/ui/LinkWithIcon/LinkWithIcon';
import cls from './Sidebar.module.scss';

interface SidebarProps{
    className?: string
}

type ILinkData = [ReactElement, string, string]

const LinksForAuthUser: ILinkData[] = [
    [<UserIcon />, 'Моя страница', '/about'],
    [<ArticleIcon />, 'Статьи', '/'],
    [<FriendIcon />, 'Друзья', '/'],
];
const LinksForNotAuthUser: ILinkData[] = [[<ArticleIcon />, 'Статьи', '/about']];

export const Sidebar = ({ className }: SidebarProps) => {
    const authData = useSelector(getUserAuthData);

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.switchers}>
                {(authData ? LinksForAuthUser : LinksForNotAuthUser).map(([icon, text, to]: ILinkData) => (
                    <LinkWithIcon icon={icon} to={to} text={text} />
                ))}
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
