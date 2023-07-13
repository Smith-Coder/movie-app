import { Component, Input } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  // animations: [
  //   trigger('movieAnimation', [
  //     transition('* => *', [
  //       query('.col-md-3', [
  //         style({ opacity: 0, transform: 'translateY(-20px)' }),
  //         stagger(100, [
  //           animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class MovieListComponent {
  @Input() title: string = "";
  @Input() serviceMethod: string = "";
  loading: boolean = false;
  movies: any[] = [];
  page: number = 1;
  hasMoreResults: boolean = true;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.searchMovies();
    // switch (this.serviceMethod) {
    //   case 'topRated':
    //     this.tmdbService.getTopRatedMovies(this.page).subscribe(
    //       (response: any) => {
    //         this.movies = response.results;
    //         this.loading = false;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }

    //     );
    //     break;
    //   case 'upcoming':
    //     this.tmdbService.getUpcomingMovies(this.page).subscribe(
    //       (response: any) => {
    //         this.movies = response.results;
    //         this.loading = false;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     );
    //     break;
    //   case 'new':
    //     this.tmdbService.getNewReleases(this.page).subscribe(
    //       (response: any) => {
    //         this.movies = response.results;
    //         this.loading = false;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     );
    //     break;
    //   default:
    //     break;
    // }
  }
  searchMovies(): void {
    this.page = 1;
    this.movies = [];
    this.hasMoreResults = true;
    this.loadMovies();
  }

  loadMovies(): void {
    console.log("this is called")
    console.log(this.hasMoreResults)
    if (this.hasMoreResults && !this.loading) {
      this.loading = true;
      console.log(this.serviceMethod);
      if (this.serviceMethod == "topRated") {
        console.log("i am innn")
        this.tmdbService.getTopRatedMovies(this.page).subscribe(
          (response: any) => {
            this.movies = this.movies.concat(response.results);
            this.hasMoreResults = (response.total_results - this.movies.length) > 0;
            this.loading = false;
            console.log("value:" + response.total_results)
          });
        this.page++;
      } else if (this.serviceMethod == "upcoming") {
        this.tmdbService.getUpcomingMovies(this.page).subscribe(
          (response: any) => {
            this.movies = this.movies.concat(response.results);
            this.hasMoreResults = (response.total_results - this.movies.length) > 0;
            this.loading = false;
          });
        this.page++;
      }
      else if (this.serviceMethod == "popular") {
        this.tmdbService.getPopularReleases(this.page).subscribe(
          (response: any) => {
            this.movies = this.movies.concat(response.results);
            this.hasMoreResults = (response.total_results - this.movies.length) > 0;
            this.loading = false;
          });
        this.page++;
      }
    }
  }

  onScroll(): void {
    console.log("on scroll called")
    this.loadMovies();
  }
}
