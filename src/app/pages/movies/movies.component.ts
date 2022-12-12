import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { IMovieList } from 'src/app/interfaces/movie-list.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  public movies: IMovie[];
  public filterString = '';
  public header: string;
  public loading = false;
  public modal: boolean;

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.loading = true;
    this.moviesService.getAllMovies().subscribe((movies: IMovieList) => {
      this.movies = movies.results;
      this.loading = false;
      this.header = 'Список популярних фільмів:'
    });
  }

  public getFilteredData(): void {
    this.loading = true;
    this.moviesService.getFilteredMovies(this.filterString).subscribe((movies: IMovieList) => {
      this.movies = movies.results;
      this.loading = false;
      this.header = `Знайдено ${this.movies.length} фільмів:`;
    });
  }

  public showModal(state: boolean): void {
    this.modal = state;
  }

}
