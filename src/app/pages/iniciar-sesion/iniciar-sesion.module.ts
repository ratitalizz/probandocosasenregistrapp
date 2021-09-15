import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos FormsModule y ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionPageRoutingModule } from './iniciar-sesion-routing.module';

import { IniciarSesionPage } from './iniciar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IniciarSesionPageRoutingModule,
    //Importamos ReactiveForms y FormsModule
    FormsModule, 
    ReactiveFormsModule,
  ],
  declarations: [IniciarSesionPage]
})
export class IniciarSesionPageModule {}
