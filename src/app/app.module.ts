import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.routes';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PublicModule } from "./modules/public/public.module";
import { PrivateModule } from "./modules/private/private.module";
import { LoaderService } from "./common/services/loader/loader.service";
import { HttpService } from "./common/services/http/http.service";
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule,
    appRoute,
    PublicModule,
    PrivateModule
  ],
  providers: [
    HttpService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
