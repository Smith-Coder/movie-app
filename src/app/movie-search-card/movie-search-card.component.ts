import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search-card',
  templateUrl: './movie-search-card.component.html',
  styleUrls: ['./movie-search-card.component.css']
})
export class MovieSearchCardComponent {
  constructor(private router: Router) { }
  @Input() movie: any;
  navigateToMovieDetails(movieId: string): void {
    this.router.navigate(['/movies', movieId]);
  }
}
