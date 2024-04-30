import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeButton, Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearedLight: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'text',
    },
};
export const ClearedDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OutlineLight: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'text',
    },
};
export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
