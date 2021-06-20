import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MycomponentComponent } from "./mycomponent/mycomponent.component";
const routes: Routes = [
    {
        path:'',
        component:MycomponentComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export class MymoduleRoutingModule { }