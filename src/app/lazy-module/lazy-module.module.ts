import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';

const routes: Routes = [
  {
    path: '1', 
    component: ChildOneComponent,
  }, 
  {
    path: 'organizations/:organizationId', 
    component: OrganizationDetailsComponent,
  }, 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  }
];

@NgModule({
  declarations: [ChildOneComponent, OrganizationDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModuleModule { }
