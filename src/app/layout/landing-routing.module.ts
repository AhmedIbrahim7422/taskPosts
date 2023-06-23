import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { NewPostComponent } from '../pages/new-post/new-post.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { GuardGuard } from '../shared/services/users/guard.guard';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', component: PostsComponent},
      {path: 'new-post', component: NewPostComponent, canActivate: [GuardGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
