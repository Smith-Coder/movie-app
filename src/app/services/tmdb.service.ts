import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '4e44d9029b1270a757cddc766a1bcb63';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const currentDate = new Date().toISOString().split('T')[0];
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&primary_release_date.gte=${currentDate}`;
    return this.http.get(url);
  }

  getTopRatedMovies() {
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getUpcomingMovies() {
    return this.http.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`);
  }
  getMovieDetails(movieId: string) {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

}

