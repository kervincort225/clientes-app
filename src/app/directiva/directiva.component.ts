import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaCurso: string[] =['TypeScript','Javascript','JavaSe','C#','PHP'];
  habilitar:boolean = false;

  constructor() { }
  setHabilitar():void {
    this.habilitar = (this.habilitar==true)?false:true;
  }

}
