import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { CadastroComponent } from './cadastro/cadastro.component';


export const routes: Routes = [
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'cadastro', component: CadastroComponent }
];
