import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieList } from 'src/app/interfaces/movie-list.interface';
import { IMovieDetails } from 'src/app/interfaces/movie-details.interface';
import { IImages } from 'src/app/interfaces/images.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public apiUrl = 'https://api.themoviedb.org/3';
  public apiKey = '958eebe8b0b0e5fc093a1464d063c887';

  public getAllMovies(): Observable<IMovieList> {
    return this.http.get<IMovieList>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  public getFilteredMovies(str: string): Observable<IMovieList> {
    return this.http.get<IMovieList>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${str}`);
  }

  public getMovieDetails(id: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  public getMovieImages(id: number): Observable<IImages> {
    return this.http.get<IImages>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }
}
