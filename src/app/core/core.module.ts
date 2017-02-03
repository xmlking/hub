import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import {Services} from './services';
import {Guards} from './guards';
import {Components} from './components';

import {EffectsModule} from '@ngrx/effects';
import {ModalEffects} from './modal/modal.effects';
import {ModalService} from './modal/modal.service';
import {ModalActions} from './modal/modal.actions';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    EffectsModule.run(ModalEffects),
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

  // static forRoot(config: UserServiceConfig): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {provide: UserServiceConfig, useValue: config}
  //     ]
  //   };
  // }

}
