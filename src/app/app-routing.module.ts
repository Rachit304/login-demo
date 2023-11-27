import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'



const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home',loadChildren: () => import('../app/movie/movie.module').then(m => m.MovieModule)},
  //  { path: 'details',loadChildren: () => import('../app/movie/movie.module').then(m => m.MovieModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
