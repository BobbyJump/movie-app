import { Injectable } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public movieList: IMovie[];
  public tvList: ITvShow[];
  public user: IUser;
  public userId: string;

  constructor() {
    this.user = JSON.parse(localStorage.getItem(`user`));
    this.userId = this.user.uid;
    this.movieList = JSON.parse(localStorage.getItem(`movieList_${this.userId}`));
    this.tvList = JSON.parse(localStorage.getItem(`tvList_${this.userId}`));
  }

  public addMovieToProfile(movie: IMovie): void {
    if (!this.movieList) this.movieList = []; 
    this.movieList.unshift(movie);
    localStorage.setItem(`movieList_${this.userId}`, JSON.stringify(this.movieList));
  }

  public addTvToProfile(tv: ITvShow): void {
    if (!this.tvList) this.tvList = [];
    this.tvList.unshift(tv);
    localStorage.setItem(`tvList_${this.userId}`, JSON.stringify(this.tvList));
  }

}
