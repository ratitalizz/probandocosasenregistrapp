import { Component} from '@angular/core';

//Importamos el componente de manejo de forms
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  // Creamos un FormGroup
  loginForm: FormGroup;


  // Inicializamos el contructor con un router y un navControl
  constructor(
    private router: Router, 
    private navControl: NavController, 
    private formBuilder: FormBuilder 
    ) 
  { 
    this.loginForm = this.formBuilder.group({
      // Creamos Controles de Formularios
      username: new FormControl("",
        Validators.compose([
        Validators.required, // Campo requerido
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern("^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$") // Expresión Regular para validar el username
      ])),
      password: new FormControl("",
        Validators.compose([
        Validators.required, // Campo requerido
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')// Expresión Regular para validar el password
        /* 
          La pass debe 
          Minimo 8 caracteres
          Al menos una letra mayúscula
          Al menos una letra minucula
          Al menos un dígito
          No espacios en blanco
          Al menos 1 caracter especial
        */
      ]))
    });
  }

  limpiarCampos(){
    //Resetea Formulario
    this.loginForm.reset();
  }

  validarLogin(){
    if(this.loginForm.valid){
      console.log('Válido');
      this.limpiarCampos();
    }else{
      console.log('No válido');
    }
  }
 

  // Método que iniciar sesión al clickear el botón
  iniciarSesion(){
    // Falta validar 
    this.validarLogin();
    // Nos redirige a la Página de Inicio
    //this.router.navigate(['/inicio'])
  }

  // Agrego métodos get para validar el Formulario
  get username(){ return this.loginForm.get('username'); }
  get password(){ return this.loginForm.get('password'); }

  /*

    VALIDAR


    function validatePassword() {
    var p = document.getElementById('newPassword').value,
        errors = [];
    if (p.length < 8) {
        errors.Push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.Push("Your password must contain at least one letter."); 
    }
    if (p.search(/[0-9]/) < 0) {
        errors.Push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}
  */

}
