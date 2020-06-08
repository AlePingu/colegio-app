import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEnrollmentPageRoutingModule } from './create-enrollment-routing.module';

import { CreateEnrollmentPage } from './create-enrollment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEnrollmentPageRoutingModule
  ],
  declarations: [CreateEnrollmentPage]
})
export class CreateEnrollmentPageModule {}
