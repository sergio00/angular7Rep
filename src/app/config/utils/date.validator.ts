import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
export class DateValidator {
  static dateVaidator(AC: AbstractControl) {
    //var moment = require('moment');
    //moment().format();
    console.log(AC.value);
    if (AC && AC.value && !moment(AC.value, 'YYYY-MM-DD', true).isValid()) {
      return { 'dateVaidator': true };
    }
    return null;
  }
}