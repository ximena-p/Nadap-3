import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService} from '../../servicios/api.service';
import { registro } from '../../models/registro.interface';
import { response} from '../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  logingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    date: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  prueva():void{
    this.router.navigate(['perfilEstudiente']);
  }

  onLoging(form: registro): void{
    this.api.registroByEmail(form).subscribe(data => {
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
