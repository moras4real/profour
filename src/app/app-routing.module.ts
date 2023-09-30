import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';
import { PopmapComponent } from './popmap/popmap.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { PopulationComponent } from './population/population.component';

const routes: Routes = [
  {path:"",component:LandpageComponent},
  {path:"home",redirectTo:"", pathMatch:"full"},
  {path:"popmap",component:PopmapComponent},
  {path:"population",component:PopulationComponent},
  // {path:"about",component:AboutComponent},
  // {path:"contact/:userpage",component:UserpageComponent},
  // {path:"contact",component:ContactComponent},  
  // {path:"admin",component:AdminComponent,canActivate:[authGuard]},  
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
