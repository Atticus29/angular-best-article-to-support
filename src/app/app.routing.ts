import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {IndexComponent} from './index/index.component';
import {ClaimComponent} from './claim/claim.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'claim/:claimId',
    component: ClaimComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
