import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = '';
  movieDetails: any; // Update the data type as per your API response

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.fetchMovieDetails();
    });
  }

  fetchMovieDetails() {
    this.tmdbService.getMovieDetails(this.movieId).subscribe((details: any) => {
      this.movieDetails = details;
    });
  }
}
