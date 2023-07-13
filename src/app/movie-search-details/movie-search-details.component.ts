import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search-details',
  templateUrl: './movie-search-details.component.html',
  styleUrls: ['./movie-search-details.component.css']
})
export class MovieSearchDetailsComponent implements OnInit {
  movieId: string | null = '';
  movie: any;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.loadMovieDetails();
      console.log("in")
    });
  }

  loadMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId!)
      .subscribe(data => {
        this.movie = data;
        this.loading = false;
      });
  }
}
