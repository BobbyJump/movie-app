import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvService } from 'src/app/shared/services/tv.service';

import { IMovieList } from 'src/app/interfaces/movie-list.interface';
import { ITvShowList } from 'src/app/interfaces/tv-show-list.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService, private tvService: TvService) { }

  public movies: IMovie[] = [];
  public tvShows: ITvShow[] = [];
  public activeBtn: string;
  public filterString = '';
  public numberOfMovies: number;
  public numberOfTv: number;
  public totalNumber: number;
  public suggest: string;

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.showMovies();
    this.showTvShows();
    this.totalNumber = this.numberOfMovies + this.numberOfTv;
    this.activeBtn = 'all';
    this.suggest = 'фільмів та серіалів'
  }

  showTvShows() {
    this.activeBtn = 'tv';
    this.tvService.getAllTvShows().subscribe((tv: ITvShowList) => {
      this.tvShows = tv.results;
      this.numberOfTv = tv.results.length;
    });
    this.totalNumber = this.numberOfTv;
    this.suggest = 'серіалів'
  }

  showMovies() {
    this.activeBtn = 'movies';
    this.moviesService.getAllMovies().subscribe((movies: IMovieList) => {
      this.movies = movies.results;
      this.numberOfMovies = movies.results.length;
    });
    this.totalNumber = this.numberOfMovies;
    this.suggest = 'фільмів'
  }

  getFilteredData() {
    if (this.activeBtn === 'all') {
      this.moviesService.getFilteredMovies(this.filterString).subscribe((movies: IMovieList) => {
        this.movies = movies.results;
        this.numberOfMovies = movies.results.length;
      });
      this.tvService.getFilteredTvShows(this.filterString).subscribe((tv: ITvShowList) => {
        this.tvShows = tv.results;
        this.numberOfTv = tv.results.length;
      });
    } else if (this.activeBtn === 'tv') {
        this.tvService.getFilteredTvShows(this.filterString).subscribe((tv: ITvShowList) => {
        this.tvShows = tv.results;
        this.numberOfTv = tv.results.length;
      });
    } else {
        this.moviesService.getFilteredMovies(this.filterString).subscribe((movies: IMovieList) => {
        this.movies = movies.results;
        this.numberOfMovies = movies.results.length;
      });
    }
    this.filterString = '';
  }

}
