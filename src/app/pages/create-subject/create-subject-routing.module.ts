import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSubjectPage } from './create-subject.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSubjectPageRoutingModule {}
