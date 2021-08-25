import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Carlos";
  genero: string = "masculino";
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };
  
  //i18nPlural
  clientes: string[] = ['Maria', 'Carlos', 'Pedro', 'Melissa'];
  
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    this.nombre = 'Melissa'
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //Key value pipe

  persona = {
    nombre: 'Carlos',
    edad: 51,
    direccion: 'Manzano'
  }
}
