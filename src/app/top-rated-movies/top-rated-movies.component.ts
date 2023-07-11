import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovies: any[] = []; // Update the data type as per your API response

  constructor(private tmdbService: TmdbService) { }


  ngOnInit() {
    this.tmdbService.getTopRatedMovies().subscribe(
      (response: any) => {
        this.topRatedMovies = response.results;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}