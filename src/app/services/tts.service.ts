import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

// Generamos una carpeta para usar el servicio

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech) { }

  decir(texto:string){
    this._tts.speak({
      text:texto,
      locale:'es-CL', //Idioma
      rate:1
      // Función de flecha que nos indica si funciona o no el método
    }).then(()=>console.log('Funciona'))
    .catch((resp:any)=>console.error(resp) 
    );
  }


}
