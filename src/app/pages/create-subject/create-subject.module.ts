import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSubjectPageRoutingModule } from './create-subject-routing.module';

import { CreateSubjectPage } from './create-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateSubjectPageRoutingModule
  ],
  declarations: [CreateSubjectPage]
})
export class CreateSubjectPageModule {}
