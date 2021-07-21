import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, Duration } from 'luxon';
import { Song } from './interfaces/song';

@Pipe({
  name: 'readableDate'
})
export class ReadableDatePipe implements PipeTransform {

  transform(song: Song, liked: boolean): string {
    if (liked) {
      return this.dateToString(song.liked_date);
    } else {
      return this.dateToString(song.created_at);
    }
  }

  dateToString(date: DateTime) {
    if (date < DateTime.now().plus({months: 1})) {
      let diff = DateTime.now().diff(date, ['days', 'seconds', 'hours', 'minutes'])    
      switch (diff.days) {
        case 0:       
          return this.lessThanDay(diff)
        case 1:
          return `${diff.days} day ago`
        default:
          return `${diff.days} days ago`
      }
    } else {
      return date.toLocaleString(DateTime.DATE_MED)
    }
  }
  
  lessThanDay(diff: Duration) {
    if (60 < diff.seconds && diff.seconds <  3600) {
      return `${diff.minutes} minutes ago`
    } else {
      if (diff.hours == 1) {
        return `${diff.hours} hour ago`
      } else {
        return `${diff.hours} hours ago`
      }
    }
  }
}
