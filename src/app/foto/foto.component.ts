import {Component} from "@angular/core";
@Component({
    selector: "app-foto",
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{
    titulo = "Minhas Fotos";
    botao = "Exibir Todas";
    catalogoFotos = [
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png", titulo:"Astra", id:0},
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png", titulo:"Jett", id:1},
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png", titulo:"Neon", id:2},
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png", titulo:"Fade", id:3},
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png", titulo:"Sage", id:4},
      {img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png", titulo:"Viper", id:5}
    ];
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
}