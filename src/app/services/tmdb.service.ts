import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '4e44d9029b1270a757cddc766a1bcb63';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularReleases(page: number) {
    const currentDate = new Date().toISOString().split('T')[0];
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get(url);
  }

  getTopRatedMovies(page: number) {
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}`);
  }

  getUpcomingMovies(page: number) {
    const currentDate = new Date().toISOString().split('T')[0];
    return this.http.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&&primary_release_date.gte=${currentDate}&page=${page}`);
  }
  getMovieDetails(movieId: string) {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

}

