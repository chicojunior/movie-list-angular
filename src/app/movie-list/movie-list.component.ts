import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@app-common/model/movie.model';
import { MovieService } from '@app-common/service/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ]
})
export class MovieListComponent {

  @Input() movies: Movie[];

  constructor() {}
}
