import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const AuthLight: Story = {
    decorators: [
        StoreDecorator({ user: { authData: {} } }),
    ],
};
export const AuthDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } }),
    ],
};
