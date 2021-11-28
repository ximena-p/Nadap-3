import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor() { }

  carrera: string = "Ingenieria informatica";
  

  items: Item[] = []; 
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
