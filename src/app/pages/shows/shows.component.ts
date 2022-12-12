import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/shared/services/tv.service';

import { ITvShowList } from 'src/app/interfaces/tv-show-list.interface';
import { ITvShow } from 'src/app/interfaces/tv-show.interface';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  constructor(private tvService: TvService) { }

  public tvShows: ITvShow[];
  public filterString = '';
  public header: string;
  public loading = false;
  public modal: boolean;

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.loading = true;
    this.tvService.getAllTvShows().subscribe((tv: ITvShowList) => {
      this.tvShows = tv.results;
      this.loading = false;
      this.header = 'Список популярних серіалів:'
    });
  }

  getFilteredShows() {
    this.loading = true;
    this.tvService.getFilteredTvShows(this.filterString).subscribe((tv: ITvShowList) => {
      this.tvShows = tv.results;
      this.loading = false;
      this.header = `Знайдено ${this.tvShows.length} серіалів:`;
    });
  }

  public showModal(state: boolean): void {
    this.modal = state;
  }

}
