import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaComponent } from './pagina/pagina.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: 'pagina', pathMatch: 'full' },
  {path: 'menu' , component: MenuComponent},
  {path:'sobre' ,component: SobreComponent},
  {path: 'pagina' ,component: PaginaComponent },
  {path: 'Formulario' ,component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
