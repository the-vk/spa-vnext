import { ComponentType } from 'react';

import { ViewModel } from './viewModel';

export type View<P extends ViewModel> = ComponentType<{model: P}>;
