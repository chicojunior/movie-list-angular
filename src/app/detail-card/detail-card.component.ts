import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnChanges {

  @Input() movie: Movie;

  public genres: string;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.isEmpty(changes.movie.currentValue)) {
      this.genres = changes.movie.currentValue.genres.join(', ');
    }
  }

  isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

}
