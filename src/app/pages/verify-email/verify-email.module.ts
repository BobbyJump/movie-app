import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VerifyEmailRoutingModule } from './verify-email-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { VerifyEmailComponent } from './verify-email.component';

@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VerifyEmailRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class VerifyEmailModule {}