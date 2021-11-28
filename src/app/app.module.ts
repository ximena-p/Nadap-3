import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { FormInicioComponent } from './components/form-inicio/form-inicio.component';
import { PerfilProfesorComponent } from './components/perfil-profesor/perfil-profesor.component';
import { PerfilEstudianteComponent } from './components/perfil-estudiante/perfil-estudiante.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './components/item/item.component';
import { BlockComponent } from './components/block/block.component';
import { AlumnoBlockComponent } from './components/alumno-block/alumno-block.component';
import { NotaItemComponent } from './components/nota-item/nota-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormRegistroComponent,
    FormInicioComponent,
    PerfilProfesorComponent,
    PerfilEstudianteComponent,
    FooterComponent,
    ItemComponent,
    BlockComponent,
    AlumnoBlockComponent,
    NotaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
