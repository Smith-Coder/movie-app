import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
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
