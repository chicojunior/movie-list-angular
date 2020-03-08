import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MovieListModule } from '../movie-list/movie-list.module';

import { MoviePageComponent } from './movie-page.component';

@NgModule({
  declarations: [ MoviePageComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MovieListModule
  ],
  exports: [ MoviePageComponent ]
})
export class MoviePageModule {}
