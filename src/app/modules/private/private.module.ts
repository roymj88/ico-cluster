import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { privateRoute } from "./private.routes";
import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
    CommonModule,
    privateRoute
  ],
  declarations: [
    PrivateComponent
  ]
})
export class PrivateModule { }
