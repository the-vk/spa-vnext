import { Message } from './framework/message';
import * as mt from './framework/messageType';
import { View } from './framework/view';

import { UI } from './ui';

export class App<TM, TVM, TV extends View<TVM>> {
    private _messageQueue: Message[];
    private _model: TM;
    private _viewModelFactory: (model: TM) => TVM;
    private _ui: UI<TVM, TV>;

    constructor(
        initialModel: TM, 
        viewModelFactory: (model: TM) => TVM, 
        rootSelector: string, 
        rootView: TV
    ) {
        this._model = initialModel;
        this._viewModelFactory = viewModelFactory;
        this._messageQueue = [];
        this._ui = new UI<TVM, TV>(rootSelector, rootView);
    }

    public postMessage(type: string) {
        this._messageQueue.push({type});
    }

    public pumpMessages() {
        while (this._messageQueue.length > 0) {
            const message = this._messageQueue.pop();
            this.dispatchMessage(message);
        }
    }

    private dispatchMessage(message: Message) {
        switch (message.type) {
            case mt.MT_DRAW:
                this.draw();
        }
    }

    private draw() {
        const viewModel = this._viewModelFactory(this._model);
        this._ui.render(viewModel);

    }
}
