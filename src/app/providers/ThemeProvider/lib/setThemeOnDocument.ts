import { Theme } from './ThemeContext';

export function setThemeOnDocument(theme: Theme) {
    document.body.className = theme;
}
