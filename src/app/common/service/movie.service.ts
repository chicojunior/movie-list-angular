import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { map, switchMap, filter } from 'rxjs/operators';

import { Movie } from '@app-common/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public mockUrl = 'assets/mocks/movie.mock.json';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.mockUrl);
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get(this.mockUrl).pipe(map((data) => this.filterById(movieId, data as Movie[])));
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get(this.mockUrl).pipe(map((data) => this.filterMovies(query, data as Movie[])));
  }

  filterMovies(query: string, movieList: Movie[]): Movie[] {
    return movieList.filter((movie) => movie.name.toLowerCase().includes(query));
  }

  filterById(id: number, movieList: Movie[]): Movie {
    const filtered = movieList.filter((movie) => movie.id === id);
    const movie: Movie = filtered[0] as Movie;
    return movie;
  }
}
