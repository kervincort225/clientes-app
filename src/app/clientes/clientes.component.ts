import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1 , nombre:'kervin', apellido:'cortez', email:'kervincort225@gmail.com', createAt:'2020-10-29'},
    {id: 2 , nombre:'jober', apellido:'cortez', email:'jobercort225@gmail.com', createAt:'2020-10-29'},
    {id: 3 , nombre:'xiomar', apellido:'tovar', email:'xiomarcort225@gmail.com', createAt:'2020-10-29'},
    {id: 4 , nombre:'eris', apellido:'cortez', email:'eriscort225@gmail.com', createAt:'2020-10-29'},
    {id: 5 , nombre:'jobeyker', apellido:'cortez', email:'jobeykercort225@gmail.com', createAt:'2020-10-29'},
    {id: 6 , nombre:'vanessa', apellido:'cortez', email:'vanessacort225@gmail.com', createAt:'2020-10-29'},
    {id: 7 , nombre:'marielisa', apellido:'chamorro', email:'marielisacort225@gmail.com', createAt:'2020-10-29'},
    {id: 8 , nombre:'yeanellis', apellido:'ulacio', email:'yeanelliscort225@gmail.com', createAt:'2020-10-29'},
    {id: 9 , nombre:'genesis', apellido:'celaya', email:'genesiscort225@gmail.com', createAt:'2020-10-29'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
