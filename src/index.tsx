import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBaundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import './app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
    <StoreProvider>
        <HashRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </HashRouter>
    </StoreProvider>,
    document.querySelector('#root'),
);
