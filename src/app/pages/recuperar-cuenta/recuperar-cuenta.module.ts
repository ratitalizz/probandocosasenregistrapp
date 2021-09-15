import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaPageRoutingModule } from './recuperar-cuenta-routing.module';

import { RecuperarCuentaPage } from './recuperar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCuentaPageRoutingModule
  ],
  declarations: [RecuperarCuentaPage]
})
export class RecuperarCuentaPageModule {}
