import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';

import { Movie } from '@app-common/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  protected moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject([]);

  public movies: Observable<Movie[]> = this.moviesSubject.asObservable();
  public mockUrl = 'assets/mocks/movie.mock.json';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.mockUrl);
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get(this.mockUrl).pipe(map((data) => this.filterMovies(query, data as Movie[])));
  }

  filterMovies(query: string, movieList: Movie[]): Movie[] {
    return movieList.filter((movie) => movie.name.includes(query));
  }

  setMovies(movies: Movie[]): void {
    this.moviesSubject.next(movies);
  }
}
