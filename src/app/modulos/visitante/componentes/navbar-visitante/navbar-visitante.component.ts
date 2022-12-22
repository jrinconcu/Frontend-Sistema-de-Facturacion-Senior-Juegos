import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-visitante',
  templateUrl: './navbar-visitante.component.html',
  styleUrls: ['./navbar-visitante.component.css']
})
export class NavbarVisitanteComponent {

  title:string;

  constructor(private router:Router){
    this.title="El Señor de los Juegos";
  }

  logout(){
    sessionStorage.clear();
    sessionStorage.setItem('authenticated',"false");
    this.router.navigate(['/login']);
  }

}
