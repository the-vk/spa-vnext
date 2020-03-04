import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ViewModel } from './framework/viewModel';
import { View } from './framework/view';

export class UI<T extends ViewModel, V extends View<T>> {
    private _rootSelector: string;
    private _view: V;

    constructor(rootSelector: string, viewElement: V) {
        this._rootSelector = rootSelector;
        this._view = viewElement;
    }

    public render(viewModel: T): void {
        ReactDOM.render(
            React.createElement(this._view, {model: viewModel}),
            document.querySelector(this._rootSelector)
        );
    }
}
