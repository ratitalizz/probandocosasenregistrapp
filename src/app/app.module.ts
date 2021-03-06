import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importamos para Scanear y grabar en la galeria
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

//Importar TTS
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx'

// Importar AuthenGuard , Authentication y Storage
import { AuthenticationService } from './services/authentication.service';
import { AuthenGuardService } from './services/authen-guard.service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   ,BarcodeScanner, Base64ToGallery, // Importamos las librerias de Code QR
   TextToSpeech, // Importamos TTS
   AuthenGuardService, // AuthenGuard
   AuthenticationService, // Authentication
   Storage, // Storage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
