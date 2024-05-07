import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { DetalhesClienteComponent } from './components/detalhes-cliente/detalhes-cliente.component';
import { AdicionarClienteComponent } from './components/adicionar-cliente/adicionar-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { ClientesService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    DetalhesClienteComponent,
    AdicionarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }