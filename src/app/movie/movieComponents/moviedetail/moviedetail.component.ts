import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movieService/movie.service';
import { MovieData } from '../../../models/model';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {

constructor(private route: ActivatedRoute, private movieService: MovieService)
{}

movieId : string = '';
movieDetail ?: MovieData;

ngOnInit(): void {

  this.movieService.movieData$.subscribe((data) => {
    this.movieDetail = data;
    console.log(this.movieDetail);
  });

}
}