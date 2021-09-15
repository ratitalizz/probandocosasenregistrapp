import { Component} from '@angular/core';

//Importamos el componente de manejo de forms
import { FormControl, FormGroup } from '@angular/forms';

// Importamos el componente NavController
import { NavController } from '@ionic/angular';

//Importamos el componente de Routers
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})

export class IniciarSesionPage{

  // Creamos atributos de clase
  nombreUsuario:String;
  contrasenia:String;

  // Creamos los controles de formulario para usuario
  usuario = new FormGroup({
    formControlUser : new FormControl(''),
    formControlPass : new FormControl('')
  });

  // Inicializamos el contructor con un router y un navControl
  constructor(private router: Router, private navControl: NavController) { 

  }

  // Método que iniciar sesión al clickear el botón
  iniciarSesion(){
    // Falta validar 

    // Nos redirige a la Página de Inicio
    this.router.navigate(['/inicio'])
  }

}
