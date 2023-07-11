import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  upcomingMovies: any[] = []; // Update the data type as per your API response

  constructor(private tmdbService: TmdbService) { }


  ngOnInit() {
    this.tmdbService.getUpcomingMovies().subscribe(
      (response: any) => {
        this.upcomingMovies = response.results;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}