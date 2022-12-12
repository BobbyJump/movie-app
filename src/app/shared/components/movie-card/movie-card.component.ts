import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { IMovie } from 'src/app/interfaces/movie.interface';
import { ScrollService } from '../../services/window-scrolling.service';
import { finalize } from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: IMovie;
  @Input() suggest: boolean;

  @Output() modalEvent = new EventEmitter<boolean>();

  public posterUrl = 'https://image.tmdb.org/t/p/original';
  public emptyPoster = '../../../../assets/images/no-image.png';
  public addBtn = true;

  constructor(private scrollService: ScrollService, private profileService: ProfileService) {}

  onClick(movie: IMovie) {
    this.addBtn = false;
    this.modalEvent.emit(true);
    this.scrollService.disable();
    this.profileService.addMovieToProfile(movie);
  }
  
}
