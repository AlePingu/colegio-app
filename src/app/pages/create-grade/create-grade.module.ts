import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGradePageRoutingModule } from './create-grade-routing.module';

import { CreateGradePage } from './create-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateGradePageRoutingModule
  ],
  declarations: [CreateGradePage]
})
export class CreateGradePageModule {}
