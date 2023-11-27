import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MoviedetailComponent } from '../movie/movieComponents/moviedetail/moviedetail.component';
import { CardComponent } from '../movie/movieComponents/card/card.component';
import { HomeComponent } from '../movie/movieComponents/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie/movieService/movie.service';
import { DialogComponent } from '../movie/movieComponents/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    DialogComponent,
    MoviedetailComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [MovieService],
})
export class MovieModule { }
