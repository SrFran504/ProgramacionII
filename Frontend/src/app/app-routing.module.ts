import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmpresaComponent} from './Components/empresa/empresa.component';
import { ProductoComponent} from './Components/producto/producto.component';


const routes: Routes = [
  {
    path: 'empresa',
    component :EmpresaComponent
  },

  {
    path: 'producto',
    component :ProductoComponent  
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
