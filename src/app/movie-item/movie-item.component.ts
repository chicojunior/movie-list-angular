import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() movie: Movie;
  @Output() movieSelected = new EventEmitter<number>();

  selectMovie(movieId: number) {
    this.movieSelected.emit(movieId);
  }

}
