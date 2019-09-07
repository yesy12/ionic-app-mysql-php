import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dados = {
    senha : "",
    servidor : ""
  }
  constructor() {}

  chamada(){
    console.log(this.dados)
  }
}
