import { Component, OnInit, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app-common/model/movie.model';
import { movieSelected } from '@app-state/movie/movie.reducer';
import { Observable, Subscription } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { getGetMovieById } from '@app-state/actions';
import { fader } from '../route-animations';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.scss' ],
  animations: [fader]
})
export class MovieDetailComponent implements OnInit {
  public selectedMovie: Movie;
  public movie$: Observable<Movie>;
  public subscriptions: Subscription[];

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.movie$ = this.store.pipe(select(movieSelected));
    this.store.dispatch(getGetMovieById({ payload: id }));
  }
}
