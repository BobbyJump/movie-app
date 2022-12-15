import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvShowList } from 'src/app/interfaces/tv-show-list.interface';
import { ITvShowDetails } from 'src/app/interfaces/tv-show-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

  public apiUrl = 'https://api.themoviedb.org/3';
  public apiKey = '958eebe8b0b0e5fc093a1464d063c887';

  public getAllTvShows(page: number = 1): Observable<ITvShowList> {
    return this.http.get<ITvShowList>(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}&page=${page}`);
  }

  public getFilteredTvShows(str: string): Observable<ITvShowList> {
    return this.http.get<ITvShowList>(`${this.apiUrl}/search/tv?api_key=${this.apiKey}&query=${str}`);
  }

  public getAllGenres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genre/tv/list?api_key=${this.apiKey}`);
  }

  public getTvsByGenre(id: number, page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/discover/tv?api_key=${this.apiKey}&with_genres=${id}&page=${page}`);
  }

  public getTvShowDetails(id: number): Observable<ITvShowDetails> {
    return this.http.get<ITvShowDetails>(`${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`);
  }
}
