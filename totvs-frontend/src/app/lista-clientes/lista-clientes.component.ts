import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { PoPageModule, PoTableModule, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  imports: [CommonModule, PoPageModule, PoTableModule],
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];
  columns: PoTableColumn[] = [
    { property: 'nome', label: 'Nome' },
    { property: 'endereco.logradouro', label: 'Logradouro' },
    { property: 'endereco.bairro', label: 'Bairro' },
    { property: 'endereco.numero', label: 'Número' },
    { property: 'endereco.cidade', label: 'Cidade' },
    { property: 'endereco.estado', label: 'Estado' }
  ];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obterClientes();
  }

  obterClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data: any[]) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Erro ao obter clientes:', error);
      }
    );
  }
}
