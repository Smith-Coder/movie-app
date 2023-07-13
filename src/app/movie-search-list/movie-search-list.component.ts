import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'movie-search-list',
  templateUrl: './movie-search-list.component.html',
  styleUrls: ['./movie-search-list.component.css']
})
export class MovieSearchListComponent implements OnInit {
  searchTerm: string = "Marvel";
  movies: any[] = [];
  filteredMovies: any[] = [];
  loading: boolean = false;
  page: number = 1;
  hasMoreResults: boolean = true;
  selectedFilter: string = 'all'; // Track the selected filter option

  constructor(private searchService: SearchService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.searchService.searchTerm$.subscribe(searchTerm => {
      this.searchTerm = searchTerm || 'Marvel';
      this.searchMovies();
    });
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
          this.filteredMovies = this.movies;
          this.hasMoreResults = (data.totalResults - this.movies.length) > 0;
          this.loading = false;
          this.filterMovies();
        });

      this.page++;
    }
  }

  onScroll(): void {
    this.loadMovies();
  }

  filterMovies(): void {
    if (this.selectedFilter === 'movies') {
      this.filteredMovies = this.movies.filter(movie => movie.Type === 'movie');
    } else if (this.selectedFilter === 'series') {
      this.filteredMovies = this.movies.filter(movie => movie.Type === 'series');
    } else {
      this.filteredMovies = this.movies;
    }
  }
}
