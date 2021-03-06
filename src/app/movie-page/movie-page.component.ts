import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Movie } from '@app-common/model/movie.model';

import { allMovies } from '../state/movie/movie.reducer';
import { getAllMovies, searchMovies } from '../state/movie/movie.actions';
import { Router } from '@angular/router';
import { fader } from '../route-animations';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: [ './movie-page.component.scss' ],
  animations: [fader]
})
export class MoviePageComponent implements OnInit {

  public movies$: Observable<Movie[]>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.movies$ = this.store.pipe(select(allMovies));
    this.store.dispatch(getAllMovies());
  }

  searchMovies(evt) {
    const input = evt.target.value;

    if (input.length >= 3 || input === '') {
      this.store.dispatch(searchMovies({ query: input }));
    }
  }

  movieDetail(movieId: number) {
    this.router.navigate(['movies', movieId]);
  }
}
