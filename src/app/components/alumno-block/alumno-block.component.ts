import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumno-block',
  templateUrl: './alumno-block.component.html',
  styleUrls: ['./alumno-block.component.css']
})
export class AlumnoBlockComponent implements OnInit {

  constructor() { }
  semestre = "Semestre 2";

  alumno: Item[] = []; 
  ngOnInit(): void {
    this.alumno = [
      {
        nombre: "Ricardo",
        nota1: 2.3,
        nota2: 2.5,
        nota3: 6,
        nota4: 10,
        nota5: 2.3,
        aprovado: false
      },
      {
        nombre: "Juan Gabriel",
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
