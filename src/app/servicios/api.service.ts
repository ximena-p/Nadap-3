import { Injectable } from '@angular/core';
import { registro } from '../models/registro.interface';
import { loging } from '../models/loging.interface';
import { response } from '../models/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  logingByEmail(form: loging):Observable<response>{
    let direccion = this.url+"email";
    return this.http.post<response>(direccion, form)
  }

  registroByEmail(form: registro):Observable<response>{
    let direccion = this.url+"name";
    return this.http.put<response>(direccion, form)
  }
  
}
