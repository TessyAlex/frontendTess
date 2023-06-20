import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTasksAdminComponent } from './assign-tasks-admin/assign-tasks-admin.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignupComponent } from './signup/signup.component';
import { ViewTasksAdminComponent } from './view-tasks-admin/view-tasks-admin.component';
import { UserpageComponent } from './userpage/userpage.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'assign',component:AssignTasksAdminComponent},
  {path:'nav',component :NavComponent},
  {path:'adminbuttons',component :ButtonsComponent},
  {path:'form',component:MyFormComponent},
  {path:'view',component:ViewTasksAdminComponent},
  {path:'user',component:UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
