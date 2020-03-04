import * as React from 'react';

import { AppViewModel } from './model/AppViewModel';

export interface AppProps {
    model: AppViewModel;
}

export function AppView({model}: AppProps): JSX.Element {
    return (<>
        <h1>{model.header}</h1>
    </>);
}
