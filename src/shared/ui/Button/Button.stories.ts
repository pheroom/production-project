import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme, Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentLight: Story = {
    args: {
        theme: ButtonTheme.ACCENT,
        children: 'text',
    },
};
export const AccentDark: Story = {
    args: {
        theme: ButtonTheme.ACCENT,
        children: 'text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const PositiveLight: Story = {
    args: {
        theme: ButtonTheme.POSITIVE,
        children: 'text',
    },
};
export const PositiveDark: Story = {
    args: {
        theme: ButtonTheme.POSITIVE,
        children: 'text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
