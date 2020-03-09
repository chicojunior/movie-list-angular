import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  selectMovie(movieId: number) {
    this.movieSelected.emit(movieId);
  }

}
