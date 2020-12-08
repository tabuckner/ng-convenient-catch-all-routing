import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrgShorthandLoadingComponent } from './org-shorthand-loading/org-shorthand-loading.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'lazy-module',
    loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule),
  },
  { path: 'support', component: SupportComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: ':potentialOrg', component: OrgShorthandLoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
