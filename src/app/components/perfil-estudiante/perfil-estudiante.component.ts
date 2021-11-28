import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.css']
})
export class PerfilEstudianteComponent implements OnInit {

  nombre: string = "Andres"
  items: Item[] = []; 
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        semestre: 1,
        nota1: 2.3,
        nota2: 2.5,
        nota3: 6,
        nota4: 10,
        nota5: 2.3,
        aprovado: false
      },
      {
        semestre: 2,
        nota1: 2.3,
        nota2: 2.5,
        nota3: 6,
        nota4: 10,
        nota5: 2.3,
        aprovado: false
      }
    ];
  }

}
