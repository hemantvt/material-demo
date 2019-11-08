import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MaterialModule } from '../../material/material.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, RegistrationRoutingModule, MaterialModule
  ]
})
export class RegistrationModule { }
