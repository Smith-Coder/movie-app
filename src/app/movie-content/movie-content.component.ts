import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent {
  constructor(private router: Router) { }
  @Input() movie: any;
  navigateToMovieDetails(movieId: string): void {
    this.router.navigate(['/movies', movieId]);
  }
}
