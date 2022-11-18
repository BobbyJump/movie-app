import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMovie } from 'src/app/interfaces/movie.interface';
import { ScrollService } from '../../services/window-scrolling.service';

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

  constructor(private scrollService: ScrollService) {}

  onClick() {
    this.modalEvent.emit(true);
    this.scrollService.disable();
  }

  selectPoster(poster: any): string {
    if (typeof(poster) === 'string') {
      return `https://image.tmdb.org/t/p/original${poster}`
    } else {
      return this.emptyPoster;
    }
  }
}
