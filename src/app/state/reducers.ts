import { ActionReducerMap } from '@ngrx/store';

import * as fromMovie from './movie/movie.reducer';

export interface AppState {
  movies: fromMovie.MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovie.reducer
};
