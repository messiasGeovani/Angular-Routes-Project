import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { InicialComponent } from './pages/inicial/inicial.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    QuemsomosComponent,
    ContatoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
