import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBaundary';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
    <HashRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </HashRouter>,
    document.querySelector('#root'),
);
