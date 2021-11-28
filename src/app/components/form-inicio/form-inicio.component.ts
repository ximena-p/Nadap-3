import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService} from '../../servicios/api.service';
import { loging } from '../../models/loging.interface';
import { response} from '../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-inicio',
  templateUrl: './form-inicio.component.html',
  styleUrls: ['./form-inicio.component.css']
})
export class FormInicioComponent implements OnInit {

  logingForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  prueva():void{
    this.router.navigate(['perfilProfesor']);
  }

  onLoging(form: loging): void{
    this.api.logingByEmail(form).subscribe(data => {
      console.log(data);
      let dataResponse:response = data;
      if (dataResponse.result == "si"){
        localStorage.setItem("token",dataResponse.result.token);
        if (dataResponse.result == "profesor"){
          this.router.navigate(['perfilProfesor']);
        } else if (dataResponse.result == "alumno"){
          this.router.navigate(['perfilEstudiente']);
        }
      }
    })
  }

}
