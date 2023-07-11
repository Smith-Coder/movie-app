import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiUrl = 'https://www.omdbapi.com/';
    private apiKey = '3118d9b2';

    constructor(private http: HttpClient) { }

    searchMovies(title: string, page: number): Observable<any> {
        const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}&type=movie&page=${page}`;
        return this.http.get<any>(url);
    }
    getMovieDetails(id: string): Observable<any> {
        const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${id}`;
        return this.http.get<any>(url);
    }
}
