import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITvShow } from 'src/app/interfaces/tv-show.interface';
import { ProfileService } from '../../services/profile.service';
import { ScrollService } from '../../services/window-scrolling.service';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.scss']
})
export class TvCardComponent {

  @Input() tv: ITvShow;
  @Input() suggest: boolean;

  @Output() modalEvent = new EventEmitter<boolean>();

  public emptyPoster = '../../../../assets/images/no-image.png';
  public addBtn = true;

  constructor(private scrollService: ScrollService, private profileService: ProfileService) {}

  onClick(tv: ITvShow) {
    this.addBtn = false;
    this.modalEvent.emit(true);
    this.scrollService.disable();
    this.profileService.addTvToProfile(tv);
  }

}
