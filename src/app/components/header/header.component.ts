import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('myList')
  myList!: ElementRef;

  @ViewChild('myButton')
  myButton!: ElementRef;

  constructor(private renderer: Renderer2) { 
  }

  ngOnInit(): void {

  }

  contador:number=1;
  clickButton(): void{
    this.myList.nativeElement.classList.toggle('navmenu-visible');
  }

  moveNav(): void {
    /* this.renderer.removeClass(this.myList.nativeElement, "navmenu-visible"); */
    /* this.renderer.addClass(this.myList.nativeElement, "my-class"); */
    console.log(this.myList.nativeElement);
  }

  


  

}





