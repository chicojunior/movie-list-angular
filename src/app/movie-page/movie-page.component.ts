import { Component, OnInit } from '@angular/core';
import { MovieService } from '@app-common/service/movie.service';
import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.service
      .getAllMovies()
      .subscribe(res => {
        this.movies = res;
        console.log(this.movies);
      });
  }

}
