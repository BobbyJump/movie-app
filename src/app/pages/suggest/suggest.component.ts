import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvService } from 'src/app/shared/services/tv.service';

import { IMovieList } from 'src/app/interfaces/movie-list.interface';
import { ITvShowList } from 'src/app/interfaces/tv-show-list.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';
import { ScrollService } from 'src/app/shared/services/window-scrolling.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {

  constructor(private moviesService: MoviesService, private tvService: TvService, private scrollService: ScrollService) { }

  public movies: IMovie[] = [];
  public tvShows: ITvShow[] = [];
  public filterString = '';
  public modal: boolean;
  public form: boolean;
  public manual: boolean;

  ngOnInit(): void {
    this.manual = false;
  }

  getFilteredData() {
    this.moviesService.getFilteredMovies(this.filterString).subscribe((movies: IMovieList) => {
      this.movies = movies.results;
    });
    this.tvService.getFilteredTvShows(this.filterString).subscribe((tv: ITvShowList) => {
      this.tvShows = tv.results;
    });
    this.manual = this.checkManual(this.movies, this.tvShows);
  }

  public checkManual(movies: IMovie[], shows: ITvShow[]): boolean {
      return movies.length < 1 && shows.length < 1;
  }

  showModal(state: boolean): void {
    this.modal = state;
  }
  showForm(state: boolean): void {
    this.form = state;
  }
  onClick() {
    this.form = true;
    this.scrollService.disable();
  }

}
