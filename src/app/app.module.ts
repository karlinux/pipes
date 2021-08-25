import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

// Modulo personalizado

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el local  de la app

import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common/';
registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX'} //Cambio de localidad
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
