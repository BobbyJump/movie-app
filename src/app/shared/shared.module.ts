import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TvCardComponent } from './components/tv-card/tv-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { StringifyGenresPipe } from './pipes/stringify-genres.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { SuggestFormComponent } from './components/suggest-form/suggest-form.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    TvCardComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    StringifyGenresPipe,
    ModalComponent,
    SuggestFormComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent,
    TvCardComponent,
    ModalComponent,
    SuggestFormComponent,
    StringifyGenresPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
