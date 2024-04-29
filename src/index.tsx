import {render} from 'react-dom'
import App from "./app/App";
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";

render(
    <HashRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </HashRouter>,
    document.querySelector('#root')
)