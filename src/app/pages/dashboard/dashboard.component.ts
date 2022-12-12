import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public profileMovies: IMovie[] = [];
  public profileTvs: ITvShow[] = [];
  public user: IUser;
  public userId: string;

  constructor(public authService: AuthService) {
    this.user = JSON.parse(localStorage.getItem(`user`));
    this.userId = this.user.uid;
    this.profileMovies = JSON.parse(localStorage.getItem(`movieList_${this.userId}`));
    this.profileTvs = JSON.parse(localStorage.getItem(`tvList_${this.userId}`));
  }

  public setMoviesHeader(): string {
    return this.profileMovies.length > 0 ? 'Список ваших фільмів:' : 'Тут буде відображений список ваших фільмів:';
  }

  public setTvHeader(): string {
    return this.profileMovies.length > 0 ? 'Список ваших серіалів:' : 'Тут буде відображений список ваших серіалів:';
  }

}
