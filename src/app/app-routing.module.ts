import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInicioComponent } from './components/form-inicio/form-inicio.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilEstudianteComponent } from './components/perfil-estudiante/perfil-estudiante.component';
import { PerfilProfesorComponent } from './components/perfil-profesor/perfil-profesor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'registro',
    component: FormRegistroComponent,
  },
  {
    path: 'inicioSecion',
    component: FormInicioComponent,
  },
  {
    path: 'perfilProfesor',
    component: PerfilProfesorComponent,
  },
  {
    path: 'perfilEstudiente',
    component: PerfilEstudianteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
