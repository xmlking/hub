import { ModuleWithProviders, NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import {Services} from './services';
import {Guards} from './guards';
import {Components} from './components';

import {EffectsModule} from '@ngrx/effects';
import {ModalEffects} from './modal/modal.effects';
import {ModalService} from './modal/modal.service';
import {ModalActions} from './modal/modal.actions';
import {RouterModule} from '@angular/router';
import {WindowService} from './services/window.service';
import {InMemoryApiModule} from '../in-memory-api/in-memory-api.module';
import { environment } from '../../environments/environment';

const demoOnly: any[] = [];
if (environment.demo) {
  demoOnly.push(InMemoryApiModule);
}

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    EffectsModule.run(ModalEffects),
    ...demoOnly,
  ],
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components,
  ],
  providers: [
    ...Services,
    ...Guards,
    {provide: WindowService, useValue: window},

    ModalActions,
    ModalService,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
