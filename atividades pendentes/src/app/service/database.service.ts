import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fotos } from '../formulario/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/fotos/'
  
  constructor(
    private http: HttpClient
    ) { }

  getFoto(){
    return this.http.get<Fotos[]>(this.API);
  }
  
  postFoto(data: any): Observable<any>{
    return this.http.post(this.API,data);
  }

  delFoto(id:number){
    return this.http.delete(this.API + id);
  }

}

