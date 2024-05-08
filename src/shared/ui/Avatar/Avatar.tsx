import React, { CSSProperties, ImgHTMLAttributes, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import UsersIconDark from 'shared/assets/icons/users-dark.png';
import UsersIconLight from 'shared/assets/icons/users-light.png';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string
    size?: number
}

export const Avatar = memo(({ className, alt, size = 100, ...args }: AvatarProps) => {
    const { theme } = useTheme();

    const styles = useMemo<CSSProperties>(() => ({
        // minWidth: size,
        // minHeight: size,
        width: size,
        height: size,
    }), [size]);

    return (
        <div className={cls.box} style={styles}>
            <img className={classNames(cls.Avatar, {}, [className])} alt="" {...args} />
            <div style={styles} className={classNames(cls.fallback, {}, [className])}>
                <img src={theme === Theme.LIGHT ? UsersIconLight : UsersIconDark} alt="" />
            </div>
        </div>
    );
});
