import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />, {
            initialState: {},
        });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
