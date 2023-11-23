import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ProductoComponent } from './Components/producto/producto.component';

//esto tiene que configurarse 
import { DataService } from './Services/data.service';//este para la comunicacion del backend
import { HttpClientModule } from '@angular/common/http';// este para el servicios web
import { FormapagoComponent } from './Components/formapago/formapago.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { AreasTrabajoComponent } from './Components/areas-trabajo/areas-trabajo.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { TipoProductoComponent } from './Components/tipo-producto/tipo-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ProductoComponent,
    FormapagoComponent,
    ProveedoresComponent,
    AreasTrabajoComponent,
    EmpleadosComponent,
    TipoUsuarioComponent,
    UsuarioComponent,
    ClientesComponent,
    TipoProductoComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//Servocio web habilitar en angular
  ],
  providers: [DataService],//backend comunicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
