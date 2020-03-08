import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Movie } from '@app-common/model/movie.model';

import { moviesSelector } from '../state/movie/movie.reducer';
import { getAllMovies, searchMovies } from '../state/movie/movie.actions';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: [ './movie-page.component.scss' ]
})
export class MoviePageComponent implements OnInit {

  public movies$: Observable<Movie[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.movies$ = this.store.pipe(select(moviesSelector));
    this.store.dispatch(getAllMovies());
  }

  searchMovies(evt) {
    const input = evt.target.value;

    if (input.length >= 3 || input === '') {
      this.store.dispatch(searchMovies({ query: input }));
    }
  }
}
