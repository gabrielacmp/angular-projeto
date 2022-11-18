import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fotos } from '../formulario/foto';
import { DatabaseService } from '../service/database.service';

@Component({
    selector: "app-foto",
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{
  titulo = "Minhas Fotos";
  botao = "Exibir Todas";
   
  constructor(private database: DatabaseService) {}

  catalogoFotos: Fotos[] = [];

  ngOnInit() {
    this.database.getFoto().subscribe(caixa => this.catalogoFotos = caixa);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  exibirPar: boolean = true;
  clicar(){
    if(this.exibirPar){ 
      this.exibirPar = !this.exibirPar;
      this.botao = "Exibir Pares";
    }else{
      this.exibirPar = !this.exibirPar;
      this.botao = "Exibir Todas";
    }
  }

  deletar(id:number){
    alert("Deletado com sucesso");
    this.database.delFoto(id).subscribe();
  }

}