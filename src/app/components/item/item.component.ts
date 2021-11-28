import { Component, Input, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  
  @ViewChild('myLista')
  myList!: ElementRef;

  @ViewChild('myBoton')
  myButton!: ElementRef;

  constructor(private renderer: Renderer2) { 
  }

  ngOnInit(): void {

  }
  toggleDisplay(): void{
    const boton = this.myButton.nativeElement;
    const lista = this.myList.nativeElement;
    this.renderer.removeClass(lista, 'visible');
  }

  

}
