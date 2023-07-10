import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchTerm: string = "Marvel";
  movies: any[] = [];
  loading: boolean = false;
  page: number = 1;
  hasMoreResults: boolean = true;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  searchMovies(): void {
    this.page = 1;
    this.movies = [];
    this.hasMoreResults = true;
    this.loadMovies();
  }

  loadMovies(): void {
    if (this.hasMoreResults && !this.loading) {
      this.loading = true;
      this.movieService.searchMovies(this.searchTerm, this.page)
        .subscribe(data => {
          this.movies = this.movies.concat(data.Search);
          this.hasMoreResults = (data.totalResults - this.movies.length) > 0;
          this.loading = false;
        });
      this.page++;
    }
  }

  onScroll(): void {
    this.loadMovies();
  }
}
