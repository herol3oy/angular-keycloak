import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }
  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

}
