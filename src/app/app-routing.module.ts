import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import appRoutes from './routerConfig';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
