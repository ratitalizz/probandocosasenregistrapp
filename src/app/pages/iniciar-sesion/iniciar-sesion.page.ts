// Importamos el componente OnInit
import { Component, OnInit} from '@angular/core';

//Importamos el componente de manejo de forms
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Importamos el componente NavController
import { NavController } from '@ionic/angular';

//Importamos el componente de Routers
import { Router } from '@angular/router';

// Import Toast
import { ToastController } from '@ionic/angular';

//Importamos el Alert 
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})

export class IniciarSesionPage implements OnInit{

  // Creamos atributos de clase
  //nombreUsuario:String;
  //contrasenia:String;

  // Creamos un FormGroup
  loginForm: FormGroup;

    //Creamos una lista de usuarios para el login
    listaUsuarios = [
      {
        nombreUsuario: "Jorge",
        contrasenia: "RegistrAPP69!",
        tipoUsuario:2
      },
      {
        nombreUsuario: "Barbara",
        contrasenia: "RegistrAPP69!",
        tipoUsuario:2
      },
      {
        nombreUsuario: "Matias",
        contrasenia: "RegistrAPP69!",
        tipoUsuario:2
      },
      {
        nombreUsuario: "Freddy",
        contrasenia: "RegistrAPP69!",
        tipoUsuario:1
      },
    ]


  // Inicializamos el contructor con un router y un navControl
  constructor(
    private router: Router, 
    private navControl: NavController, 
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public alertController: AlertController,
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
          Al menos una letra minuscula
          Al menos un dígito
          Al menos 1 caracter especial
        */
      ]))
    });
  }

ngOnInit(){
  this.guardar();
}




    //Creación de métodos
    guardar(){
      var datos = this.listaUsuarios;
      //Guardamos en una variable de Local Storage la lista de usuarios
      localStorage.setItem('usuarios',JSON.stringify(datos));
    }

    
  


    // Función asincróna para personalizar mi Toast e invocarlo
    async toastAlert(titulo, mensaje, duracion){
      const toast = await this.toastController.create({
        header: titulo,
        message: mensaje,
        duration: duracion,
        position: 'top',
        animated: true,
        translucent: false
      });
      toast.present();
    }
    ////////////////////////////////////////
    // Funciones de alertas
    ////////////////////////////////////////

    // Alerta de confirmación
    async messageAlert(titulo, mensaje){
      const alert = await this.alertController.create({
        header:titulo,
        message: mensaje,
        buttons: ["OK"],
      })
      await alert.present();
      //Que se cierre cuando aprete el botón
      await alert.onDidDismiss();
    }

    // Alerta de eliminación (True, False)
    async messageAlert2(){
      const alert = await this.alertController.create({
        header:"Eliminar",
        message: "¿Estás seguro?",
        buttons: [
          {
            text:'No',
            handler:() => {
              console.log("Cancelar");
          }
        },
          {
            text:'Sí',
            handler:() => {
              console.log("Eliminada");
          }
        }
      ]
      });
      await alert.present();
      //Que se cierre cuando aprete el botón
      await alert.onDidDismiss();
    }

  limpiarCampos(){
    //Resetea Formulario
    this.loginForm.reset();
  }


  // Método que iniciar sesión al clickear el botón
  iniciarSesion(credenciales){
    // Falta validar 
    if(credenciales.username == "Jorge" && credenciales.password == "RegistrAPP69!"){
      this.router.navigate(['/tabs-alumno/inicio']);
    }else if(credenciales.username == "Freddy" && credenciales.password == "RegistrAPP69!"){
      this.router.navigate(['/tabs-profesor/inicio']);
    }
    else{
      console.log("F");
      this.toastAlert("Credenciales INCORRECTAS", "intentelo de nuevo", 2000);
    }
  }

  recuperarCuenta(){
    this.router.navigate(['/recuperar-cuenta'])
    //this.router.navigate(['/codigo-qr'])
  }

  // Agrego métodos get para validar el Formulario
  get username(){ return this.loginForm.get('username'); }
  get password(){ return this.loginForm.get('password'); }

}
