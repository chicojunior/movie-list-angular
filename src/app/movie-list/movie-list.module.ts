import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list.component';
import { MovieItemModule } from '../movie-item/movie-item.module';

@NgModule({
  declarations: [ MovieListComponent ],
  imports: [ CommonModule, MovieItemModule ],
  exports: [ MovieListComponent ]
})
export class MovieListModule {}
