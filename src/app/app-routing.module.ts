import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  },  
  {
    path: 'list',
    loadChildren: './components/list/list.module#ListModule'
  },
  {
    path: 'add',
    loadChildren: './components/add/add.module#AddModule'
  },    
  {
    path: 'edit/:id',
    loadChildren: './components/edit/edit.module#EditModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
