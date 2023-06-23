import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './layout/error/error.component';

const routes: Routes = [
  {path: '',redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: ()=>import('./layout/landing.module').then(m => m.LandingModule)
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
