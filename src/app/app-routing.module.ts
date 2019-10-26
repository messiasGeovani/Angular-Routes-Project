import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './pages/inicial/inicial.component'
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ContatoComponent } from './pages/contato/contato.component';


const routes: Routes = [
  {
    path: '',
    component: InicialComponent
  },
  {
    path: 'sobre',
    component: QuemsomosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
