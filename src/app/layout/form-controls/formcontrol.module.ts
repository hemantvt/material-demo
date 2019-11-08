import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcontrolRoutingModule } from './form-control-routing.module';
import { MaterialModule } from '../../material/material.module';
import { FormControlsComponent } from './form-controls.component';

@NgModule({
  declarations: [FormControlsComponent],
  imports: [
    CommonModule, FormcontrolRoutingModule, MaterialModule
  ]
})
export class FormcontrolModule { }
