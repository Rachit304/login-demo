import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { MovieService } from '../../movieService/movie.service';
import { Subscription } from 'rxjs';
import { Movie, MovieDTO } from 'src/app/models/model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] = [];
  films: MovieDTO[] = [];
  private searchSubscription: Subscription | undefined;
    constructor( 
      private loginService: LoginService,
      private router: Router,
      private movieService: MovieService
    )
    { }
    

  getMovieData(event : any){
    const searchTerm = event.target.value.toLowerCase();
    this.searchSubscription = this.movieService.searchMovie(searchTerm).subscribe((data: MovieDTO) => {
      this.movies = data.Search;
    });
  }
  
  public logout(): void {
  
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
