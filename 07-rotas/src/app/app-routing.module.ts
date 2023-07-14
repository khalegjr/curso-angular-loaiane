import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [authGuard()],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [authGuard()],
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard()] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
