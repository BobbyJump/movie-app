import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

import { IMovieDetails } from 'src/app/interfaces/movie-details.interface';
import { IImage } from 'src/app/interfaces/image.interface';
import { IImages } from 'src/app/interfaces/images.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  public selectedItem: IMovieDetails;
  public selectedItemBackdrop: IImage;
  public selectedItemPoster: IImage;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.getMovie()
  }

  public getMovie(): void {
    const itemId = parseInt(this.activatedRoute.snapshot.paramMap.get("id") as string);
    this.moviesService.getMovieDetails(itemId).subscribe((movie: IMovieDetails) => {
      this.selectedItem = movie;
    });
    this.moviesService.getMovieImages(itemId).subscribe((images: IImages) => {
      this.selectedItemBackdrop = images.backdrops[0];
      this.selectedItemPoster = images.posters[0];
    });
  }

}
