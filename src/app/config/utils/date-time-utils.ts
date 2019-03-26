import {MatDateFormats} from '@angular/material/core/typings/datetime/date-formats';

export class DateTimeUtils {
  public static readonly MAT_CUSTOM_DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: 'DD-MM-YYYY',
    },
    display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
}