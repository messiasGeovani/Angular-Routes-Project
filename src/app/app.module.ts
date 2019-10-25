import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { InicialComponent } from './pages/inicial/inicial.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component'

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    QuemsomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
