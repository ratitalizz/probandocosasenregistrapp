import { Component, OnInit } from '@angular/core';
///
import { TtsService } from 'src/app/services/tts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _stts:TtsService) { }

  hablar(esp:string){
    this._stts.decir(esp);
  }

  ngOnInit() {
  }

}
