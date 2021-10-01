import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from '../model/usuario.interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authServ: AuthenticationService,
    private toastCtrl: ToastController
  ) { }
  usuario: Usuario = {
    nombre: '',
    pass: ''
  }

  ngOnInit() {
  }
  loginUser() {
    console.log(this.usuario);
    //  
    if (this.usuario.nombre == "tito" && this.usuario.pass == "123") {
      this.authServ.login();
    }
    else {
      this.toastCtrl.create({
        message: "usuario o pass incorrecta",
        duration: 3000,
        position: 'middle'
      }).then((toast) => {
        toast.present();
      });
      //console.log('Usuario o contraseña incorrecta');
  }
    }

  }
