import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`} style={{ display: 'block' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
