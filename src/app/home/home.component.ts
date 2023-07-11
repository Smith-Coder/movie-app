import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = []; // Update the data type as per your API response

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getNewReleases().subscribe(
      (response: any) => {
        this.newReleases = response.results;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
