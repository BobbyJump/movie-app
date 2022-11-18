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

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.moviesService.getAllMovies().subscribe((movies: IMovieList) => {
      this.movies = movies.results;
    });
  }

  public getFilteredData(): void {
    this.moviesService.getFilteredMovies(this.filterString).subscribe((movies: IMovieList) => {
      this.movies = movies.results;
    });
  }

}
