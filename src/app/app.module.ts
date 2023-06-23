import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './layout/landing/landing.component';
import { ErrorComponent } from './layout/error/error.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FilterPipe } from './shared/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ErrorComponent,
    NewPostComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
