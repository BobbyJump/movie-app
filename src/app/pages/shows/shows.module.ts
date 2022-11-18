import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowsRoutingModule } from './shows-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ShowsComponent } from './shows.component';

@NgModule({
  declarations: [
    ShowsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShowsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ShowsModule { }
