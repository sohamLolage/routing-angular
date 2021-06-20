import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListComponent } from './admin/list/list.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AuthgaurdGuard } from './gaurd/authgaurd.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { user } from './Model/user';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'registration',
    component:RegistrationComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthgaurdGuard],
    
    children:[
      
      {
        path:"profile",
        component:ProfileComponent,
        
        
      },
      {
        path:'list',
        component:ListComponent,
        children:[
          {
            path:"edit",
            component:EditComponent,
            data:user
            
          }
        ]
       
        
      }
    ]
  },
  {
    path:'logout',
    component:LogoutComponent,
    pathMatch:'full'
  },
  {
    path:'mymodule',
    loadChildren: () => import('./mymodule/mymodule.module').then(m=>m.MymoduleModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
