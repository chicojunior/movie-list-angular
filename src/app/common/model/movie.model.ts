import { GenreType } from '@app-common/constants/genre-types.enum';

export class Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: GenreType[];
  rate: number;
  length: string;
  img: string;

  constructor() {

  }
}
