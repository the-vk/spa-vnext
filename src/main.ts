import { App } from "./app";
import * as mt from './framework/messageType';
import { View } from './framework/view';
import { AppViewModel } from "./view/model/AppViewModel";
import { AppView } from "./view/AppView";

const app = new App<{}, AppViewModel, View<AppViewModel>>(
    null,
    () => new AppViewModel(),
    "#root",
    AppView
);
app.postMessage(mt.MT_DRAW);
app.pumpMessages();
