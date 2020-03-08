import { Component, Input } from '@angular/core';

import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ]
})
export class MovieListComponent {

  @Input() movies: Movie[];

  constructor() {}
}
