import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailComponent } from '../movie/movieComponents/moviedetail/moviedetail.component';
import { HomeComponent } from '../movie/movieComponents/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'details', component: MoviedetailComponent, pathMatch:'full' } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
