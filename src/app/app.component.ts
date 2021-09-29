import { Component } from '@angular/core';

//Importar rutas
import { Router } from '@angular/router';
//
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router,
    private platform:Platform,
    private authService:AuthenticationService
  ) {
    //Si la plataforma está lista que haga lo siguiente
    platform.ready().then(()=>{
      // Va a estar a atento en cada momento de lo que ocurra en estado
      authService.authState.subscribe(estado=>{
        if(estado){
          router.navigate(['menu']);
        }else{
          router.navigate(['login']);
        }
      });
    })
  }
}