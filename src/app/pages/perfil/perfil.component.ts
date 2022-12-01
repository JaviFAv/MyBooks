import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario: Usuario;

  constructor() {
    this.miUsuario = new Usuario(1, "Javier", "Fernandez Jimenez", "unemail@gmail.com", "https://zagraninfo.com/wp-content/uploads/2021/06/Fotograf-v-Amerike.jpg", "unamisma")
  }

  ngOnInit(): void { }


  enviar(nombre: HTMLInputElement, apellidos: HTMLInputElement, correo: HTMLInputElement, url: HTMLInputElement) {
    console.log(this.miUsuario.nombre)
    this.miUsuario.nombre = nombre.value;
    this.miUsuario.apellidos = apellidos.value;
    this.miUsuario.correo = correo.value;
    this.miUsuario.url = url.value;
  }

}

