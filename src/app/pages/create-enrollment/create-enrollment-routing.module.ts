import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEnrollmentPage } from './create-enrollment.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEnrollmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEnrollmentPageRoutingModule {}
