import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app-common/model/movie.model';
import { movieSelected } from '@app-state/movie/movie.reducer';
import { Observable } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { getGetMovieById } from '@app-state/actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnChanges {

  public movie$: Observable<Movie>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.movie$ = this.store.pipe(select(movieSelected));
    const id = Number(this.activatedRoute.snapshot.params.id);
    debugger
    this.store.dispatch(getGetMovieById({payload: id}));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
