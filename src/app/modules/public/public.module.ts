import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { publicRoute } from "./public.routes";
import { PublicComponent } from './public.component';
import { IndexComponent } from './index/index.component';
import { PublicHeaderComponent } from "../../common/public/public-header/public-header.component";
import { PublicFooterComponent } from "../../common/public/public-footer/public-footer.component";
import { PublicNavBarComponent } from "../../common/public/public-nav-bar/public-nav-bar.component";


@NgModule({
  imports: [
    CommonModule,
    publicRoute
  ],
  declarations: [
    PublicComponent, 
    IndexComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicNavBarComponent
  ]
})
export class PublicModule { }
