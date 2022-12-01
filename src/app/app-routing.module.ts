import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LibrosComponent } from './pages/libros/libros.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "register", component: RegistroComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "libros", component: LibrosComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
