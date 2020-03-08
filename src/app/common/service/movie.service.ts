import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Movie } from '@app-common/model/movie.model';

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	constructor(private http: HttpClient) {}

	getAllMovies(): Observable<Movie[]> {
		return this.http.get<Movie[]>('assets/mocks/movie.mock.json');
	}
}
