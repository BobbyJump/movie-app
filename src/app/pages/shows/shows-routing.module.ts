import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './shows.component';
import { TvDetailsComponent } from 'src/app/shared/components/tv-details/tv-details.component';

const routes: Routes = [
  { path: '', component: ShowsComponent },
  { path: ':id', component: TvDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }