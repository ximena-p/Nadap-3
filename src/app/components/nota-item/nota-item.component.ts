import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/alumno';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-nota-item',
  templateUrl: './nota-item.component.html',
  styleUrls: ['./nota-item.component.css']
})
export class NotaItemComponent implements OnInit {

  logingForm = new FormGroup({
    nota1 : new FormControl('3.4',[Validators.required]),
    nota2 : new FormControl('5', Validators.required),
    nota3 : new FormControl('4.3', Validators.required),
    nota4 : new FormControl('3', Validators.required),
    nota5 : new FormControl('2.1', Validators.required)
  })

  @Input() alumno: Item = new Item();

  constructor() { }

  ngOnInit(): void {
  }

}
