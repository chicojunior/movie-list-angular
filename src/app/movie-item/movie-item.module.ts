import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MovieItemComponent } from './movie-item.component';

@NgModule({
  declarations: [ MovieItemComponent ],
  imports: [ CommonModule, MatCardModule ],
  exports: [ MovieItemComponent ]
})
export class MovieItemModule {}
