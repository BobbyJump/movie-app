import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringifyGenres'
})
export class StringifyGenresPipe implements PipeTransform {

  transform(genres: any): string {
    if (genres.length < 1) {
      return 'Unknown genres';
    } else {
      const resArr: string[] = [];
      genres.forEach((genre: any) => resArr.push(genre.name));
      return resArr.join(', ');
    }
  }

}
