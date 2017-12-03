import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { PublicComponent } from "./public.component";

const publicRoutes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  {
    path: 'public', component: PublicComponent, children: [
      { path: '', component: IndexComponent, pathMatch: 'full' },
    ]
  }
];

export const publicRoute = RouterModule.forRoot(publicRoutes);


