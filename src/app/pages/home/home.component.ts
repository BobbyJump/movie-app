import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvService } from 'src/app/shared/services/tv.service';

import { IMovieList } from 'src/app/interfaces/movie-list.interface';
import { ITvShowList } from 'src/app/interfaces/tv-show-list.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';
import { IGenre } from 'src/app/interfaces/genre.interface';

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
  public numberOfMovies: number;
  public numberOfTv: number;
  public totalNumber: number;
  public suggest: string;
  public modal: boolean;
  public genres: IGenre[];
  public selectedIndex: number = null;
  public showGenres: boolean = false;
  public totalPages: number[] = [];
  public currentItem: number;
  public genreID: number = null;

  ngOnInit() {
    this.showMovies();
    this.currentItem = 0;
  }

  toNumber(id: string): number {
    return Number(id);
  }

  showTvShows() {
    this.activeBtn = 'tv';
    this.getTvsGenres();
    this.tvService.getAllTvShows().subscribe((tv: ITvShowList) => {
      this.totalPages = this.setTotalPages(tv.total_pages);
      this.tvShows = tv.results;
      this.numberOfTv = tv.results.length;
    });
    this.totalNumber = this.numberOfTv;
    this.suggest = 'серіалів'
  }

  showMovies() {
    this.activeBtn = 'movies';
    this.getMoviesGenres();
    this.moviesService.getAllMovies().subscribe((movies: IMovieList) => {
      this.totalPages = this.setTotalPages(movies.total_pages);
      this.movies = movies.results;
      this.numberOfMovies = movies.results.length;
    });
    this.totalNumber = this.numberOfMovies;
    this.suggest = 'фільмів'
  }

  public getMoviesGenres(): void {
    this.moviesService.getAllGenres().subscribe(genres => {
      this.genres = genres.genres;
    })
  }

  public getMoviesByGenre(id: number, page: number): void {
    this.moviesService.getMoviesByGenre(id, page).subscribe(movies => {
      this.totalPages = this.setTotalPages(movies.total_pages);
      this.movies = movies.results;
    })
  }

  public getTvsGenres(): void {
    this.tvService.getAllGenres().subscribe(genres => {
      this.genres = genres.genres;
    })
  }

  public getTvsByGenre(id: number, page: number): void {
    this.tvService.getTvsByGenre(id, page).subscribe(tv => {
      this.totalPages = this.setTotalPages(tv.total_pages);
      this.tvShows = tv.results;
    })
  }

  public setTotalPages(numberOfPages: number): number[] {
    const arr: number[] = [];
    let pages: number;
    if(numberOfPages > 500) {
      pages = 500;
    } else {
      pages = numberOfPages;
    }
    for(let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    return arr;
  }

  getItemsByGenre(id: number, index: number): void {
    this.selectedIndex = index;
    this.genreID = id;
    this.currentItem = 0;
    if(this.activeBtn === 'movies') {
      this.getMoviesByGenre(id, 1);
    } else {
      this.getTvsByGenre(id, 1);
    }
  }

  showModal(state: boolean): void {
    this.modal = state;
  }

  setCurrent(i: number) {
    this.currentItem = i;
    if (this.genreID) {
      if(this.activeBtn === 'movies') {
        this.getMoviesByGenre(this.genreID, this.currentItem + 1);
      } else {
        this.getTvsByGenre(this.genreID, this.currentItem + 1);
      }
    } else {
      if(this.activeBtn === 'movies') {
        this.moviesService.getAllMovies(this.currentItem + 1).subscribe((movies: IMovieList) => {
          this.totalPages = this.setTotalPages(movies.total_pages);
          this.movies = movies.results;
          this.numberOfMovies = movies.results.length;
        });
      } else {
        this.tvService.getAllTvShows(this.currentItem + 1).subscribe((tv: ITvShowList) => {
          this.totalPages = this.setTotalPages(tv.total_pages);
          this.tvShows = tv.results;
          this.numberOfTv = tv.results.length;
        });
      }
    }
  }

  increment() {
    this.currentItem++;
    if (this.genreID) {
      if(this.activeBtn === 'movies') {
        this.getMoviesByGenre(this.genreID, this.currentItem + 1);
      } else {
        this.getTvsByGenre(this.genreID, this.currentItem + 1);
      }
    } else {
      if(this.activeBtn === 'movies') {
        this.moviesService.getAllMovies(this.currentItem + 1).subscribe((movies: IMovieList) => {
          this.totalPages = this.setTotalPages(movies.total_pages);
          this.movies = movies.results;
          this.numberOfMovies = movies.results.length;
        });
      } else {
        this.tvService.getAllTvShows(this.currentItem + 1).subscribe((tv: ITvShowList) => {
          this.totalPages = this.setTotalPages(tv.total_pages);
          this.tvShows = tv.results;
          this.numberOfTv = tv.results.length;
        });
      }
    }
  }

  decrement() {
    this.currentItem--;
    if (this.genreID) {
      if(this.activeBtn === 'movies') {
        this.getMoviesByGenre(this.genreID, this.currentItem + 1);
      } else {
        this.getTvsByGenre(this.genreID, this.currentItem + 1);
      }
    } else {
      if(this.activeBtn === 'movies') {
        this.moviesService.getAllMovies(this.currentItem + 1).subscribe((movies: IMovieList) => {
          this.totalPages = this.setTotalPages(movies.total_pages);
          this.movies = movies.results;
          this.numberOfMovies = movies.results.length;
        });
      } else {
        this.tvService.getAllTvShows(this.currentItem + 1).subscribe((tv: ITvShowList) => {
          this.totalPages = this.setTotalPages(tv.total_pages);
          this.tvShows = tv.results;
          this.numberOfTv = tv.results.length;
        });
      }
    }
  }

}
