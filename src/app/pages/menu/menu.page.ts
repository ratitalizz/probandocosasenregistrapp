import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private autServ: AuthenticationService) { }

  ngOnInit() {
  }
  logoutUser(){
    this.autServ.logout();
  }

}
