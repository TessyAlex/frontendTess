import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AssignTasksAdminComponent } from './assign-tasks-admin/assign-tasks-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ViewTasksAdminComponent } from './view-tasks-admin/view-tasks-admin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AssignTasksAdminComponent,
    NavComponent,
    ButtonsComponent,
    MyFormComponent,
    ViewTasksAdminComponent,
    TaskFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,  UserpageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
