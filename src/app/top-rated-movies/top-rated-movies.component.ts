import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  constructor(private tmdbService: TmdbService) { }

  ngOnInit() { }
}