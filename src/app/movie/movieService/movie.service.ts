import { Injectable } from '@angular/core';
import {MovieDTO,Movie,MovieData} from '../../models/model'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class MovieService {
  
  movies : Movie[] = [];

  constructor( private http: HttpClient) { }

  private movieDataSubject: BehaviorSubject<MovieData> = new BehaviorSubject<any>(null);
  movieData$: Observable<MovieData> = this.movieDataSubject.asObservable();

  searchMovie(searchTerm: string): Observable<MovieDTO> {
    return this.http.get<MovieDTO>("http://www.omdbapi.com/?" + `s=${searchTerm}` + `&apikey=2e39a038`);
  }

  getMovieDetail(id: string): void {
    this.http.get<MovieData>("http://www.omdbapi.com/?" + `i=${id}` + `&apikey=2e39a038`).subscribe(
      (data) => {
        this.movieDataSubject.next(data);
      }
    );

  } 
}
