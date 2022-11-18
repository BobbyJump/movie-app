import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../../services/tv.service';

import { ITvShowDetails } from 'src/app/interfaces/tv-show-details.interface';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {

  public selectedItem: ITvShowDetails;

  constructor(private activatedRoute: ActivatedRoute, private tvService: TvService) {
    this.getTvShowt()
  }

  public getTvShowt(): void {
    const itemId = parseInt(this.activatedRoute.snapshot.paramMap.get("id") as string);
    this.tvService.getTvShowDetails(itemId).subscribe((tv: ITvShowDetails) => {
      this.selectedItem = tv;
    });
  }

}
