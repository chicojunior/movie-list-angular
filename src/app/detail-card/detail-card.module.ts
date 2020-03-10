import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DetailCardComponent } from './detail-card.component';



@NgModule({
  declarations: [DetailCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [DetailCardComponent]
})
export class DetailCardModule { }
