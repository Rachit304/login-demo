import { Component, Input } from '@angular/core';
import {Movie} from '../../../models/model'
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from '../../movieService/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent {

  constructor(private router: Router,private movieService: MovieService,private route: ActivatedRoute,private dialog: MatDialog)
  {}

  @Input() movie ?: Movie;
  userInput ?: string;

  private movieSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  movieDetail(id: string) : void {
    this.movieService.getMovieDetail(id);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      height: '300px',
      data: { name : this.movie?.Title
      },
      backdropClass: 'confirmDialogComponent',
      hasBackdrop: true,
      }); 

      dialogRef.afterClosed().subscribe((result) => {
        if(result.data.toUpperCase() === 'YES')
        {
          this.router.navigate(['details'], { relativeTo: this.route });
        }
        else if(result.data.toUpperCase() === 'NO')
        {
           console.log(result.data);
        }
        else
        {
            alert("please enter valid input");
        }
    });
  
}
}
