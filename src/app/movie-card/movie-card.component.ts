import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any; // Update the data type as per your API response
  @Input() ck: boolean = false;
  // navigateToMovieDetails(movieId: string): void {
  //   this.router.navigate(['/movies', movieId]);
  // }
}
