import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './pages/inicial/inicial.component'
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';


const routes: Routes = [
  {
    path: '',
    component: InicialComponent
  },
  {
    path: 'sobre',
    component: QuemsomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
