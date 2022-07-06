import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  // {
  //   path:'',
  //   component:InlineEditingOneComponent
  // },
  // {
  //   path:'way-1',
  //   component:InlineEditingOneComponent
  // },
  // {
  //   path:'way-2',
  //   component:InlineEditingtwoComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
