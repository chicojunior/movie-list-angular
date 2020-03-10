import { Component, Input } from '@angular/core';
import { Movie } from '@app-common/model/movie.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {

  @Input() movie: Movie;

}
