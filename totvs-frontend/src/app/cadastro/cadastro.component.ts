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
    PoPageModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  usuario = {
    nome: '',
    endereco: '',
    telefone: ''
  };

  cadastrar() {
    console.log('Usuário cadastrado:', this.usuario);
  }
}
