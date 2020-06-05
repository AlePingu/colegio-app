import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGradePage } from './create-grade.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGradePageRoutingModule {}
