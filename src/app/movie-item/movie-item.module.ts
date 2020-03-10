import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MovieItemComponent } from './movie-item.component';

@NgModule({
  declarations: [ MovieItemComponent ],
  imports: [ CommonModule, MatCardModule, MatIconModule ],
  exports: [ MovieItemComponent ]
})
export class MovieItemModule {}
