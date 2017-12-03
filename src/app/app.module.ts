import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.routes';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PublicModule } from "./modules/public/public.module";
import { PrivateModule } from "./modules/private/private.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    appRoute,
    PublicModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
