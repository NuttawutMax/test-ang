import { DatePipe, formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calulateBirthDate'
})
export class CalulateBirthDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {

  }

  transform(value: any, displayFullBirthDate?: boolean): string {
    let splitedDate = value.split('/');
    let formattedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
    let currentDate = new Date();
    // let age = currentDate.valueOf() - formattedDate.valueOf();
    // var currentAge = Math.floor(age/31557600000);


    return !displayFullBirthDate ? `${value}(${this.getAge(currentDate, formattedDate)})`: `${this.getAge(currentDate, formattedDate)}`;
  }

  getAge(currentDate: Date, birthDate: Date) {
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
