import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PoFieldModule, PoButtonModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PoFieldModule,
    PoButtonModule,
    PoPageModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cliente = {
    nome: '',
    endereco: {
      logradouro: '',
      bairro: '',
      numero: '',
      cidade: '',
      estado: ''
    },
    telefones: [
      { telefone: '' }
    ]
  };

  adicionarTelefone() {
    this.cliente.telefones.push({ telefone: '' });
  }

  removerTelefone(index: number) {
    this.cliente.telefones.splice(index, 1);
  }

  cadastrar() {
    console.log('Cliente cadastrado:', this.cliente);
  }
}
