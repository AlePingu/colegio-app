import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteUserPageRoutingModule } from './delete-user-routing.module';

import { DeleteUserPage } from './delete-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DeleteUserPageRoutingModule
  ],
  declarations: [DeleteUserPage]
})
export class DeleteUserPageModule {}
