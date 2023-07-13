import { Component, Input } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() title: string = "";
  @Input() serviceMethod: string = "";
  loading: boolean = true;
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {

    switch (this.serviceMethod) {
      case 'topRated':
        this.tmdbService.getTopRatedMovies().subscribe(
          (response: any) => {
            this.movies = response.results;
            this.loading = false;
          },
          (error: any) => {
            console.log(error);
          }

        );
        break;
      case 'upcoming':
        this.tmdbService.getUpcomingMovies().subscribe(
          (response: any) => {
            this.movies = response.results;
            this.loading = false;
          },
          (error: any) => {
            console.log(error);
          }
        );
        break;
      case 'new':
        this.tmdbService.getNewReleases().subscribe(
          (response: any) => {
            this.movies = response.results;
            this.loading = false;
          },
          (error: any) => {
            console.log(error);
          }
        );
        break;
      default:
        break;
    }
  }
}
