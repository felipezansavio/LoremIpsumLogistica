import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent {
  @Input() cliente: Cliente;

  constructor() { }
}
