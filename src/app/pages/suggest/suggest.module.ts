import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuggestRoutingModule } from './suggest-routing.module';
import { FormsModule } from '@angular/forms';

import { SuggestComponent } from './suggest.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SuggestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SuggestRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SuggestModule { }
