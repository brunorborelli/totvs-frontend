import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoFieldModule, PoButtonModule } from '@po-ui/ng-components';
import { ClienteService } from '../cliente.service'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule
  ]
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

  constructor(private clienteService: ClienteService) {}

  adicionarTelefone() {
    this.cliente.telefones.push({ telefone: '' });
  }

  removerTelefone(index: number) {
    this.cliente.telefones.splice(index, 1);
  }

  cadastrar() {
    this.clienteService.cadastrarCliente(this.cliente).subscribe(
      (response) => {
        console.log('Cliente cadastrado com sucesso!', response);
        this.limparFormulario();
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
      }
    );
  }
  private limparFormulario() {
    this.cliente = {
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
  }
}
