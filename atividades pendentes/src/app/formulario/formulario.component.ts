import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Fotos } from './foto';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  formulario!: FormGroup;

  imagens: Fotos = {
    img: "",
    titulo: "",
    id: 0
  };
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private database: DatabaseService
    ) { }
    
    ngOnInit(): void {
      this.validaForm();
    }

    validaForm(){
      this.formulario = this.formBuilder.group({
        img: ['', [Validators.required]],
        titulo: ['', [Validators.required]]
      });
    }
  
    cadastro(): void{
      const data = {
        img: this.imagens.img,
        titulo: this.imagens.titulo
      };
      this.database.postFoto(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
}
