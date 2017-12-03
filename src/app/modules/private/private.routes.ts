import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from "./private.component";

const privateRoutes: Routes = [
  // {
  //   path: 'private', component: PrivateComponent, children: [
  //     // { path: '', component: IndexComponent },
  //   ]
  // }
];

export const privateRoute = RouterModule.forRoot(privateRoutes);


