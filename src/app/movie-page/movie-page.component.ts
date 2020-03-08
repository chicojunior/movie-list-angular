import { Component, OnInit } from '@angular/core';
import { MovieService } from '@app-common/service/movie.service';
import { Movie } from '@app-common/model/movie.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { moviesSelector } from '../state/movie/movie.reducer';
import { getAllMovies } from '../state/movie/movie.actions';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: [ './movie-page.component.scss' ]
})
export class MoviePageComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(getAllMovies());
    this.movies$ = this.store.pipe(select(moviesSelector));
  }
}
