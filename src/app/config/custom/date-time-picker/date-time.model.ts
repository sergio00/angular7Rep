import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

export interface NgbDateTimeStruct extends NgbDateStruct, NgbTimeStruct { }

export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }
export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
    if (isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return '';
    }
  }

export class DateTimeModel implements NgbDateTimeStruct {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;

    timeZoneOffset: number;

    public constructor( init?: Partial<DateTimeModel>) {
        Object.assign(this, init);
    }

    

    public static fromLocalString(dateString: string): DateTimeModel {
        let day:any;
        let month:any;
        let year:any;
        let hora:any;
        let minuto:any;
        let segundo:any;
        if (dateString) {
             const dateParts = dateString.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                day= toInteger(dateParts[0]);
                month= null;
                year= null;
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
               day= toInteger(dateParts[0]);
               month= toInteger(dateParts[1]);
               year= null;
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) { 
               day= toInteger(dateParts[0]);
               month= toInteger(dateParts[1]);
               year= toInteger(dateParts[2]);
            }
            const timeParts = dateString.trim().split(':');
            let cadena=timeParts[0];
            // console.log("Cadena="+cadena.length);
            hora=cadena.substring(cadena.length-2,cadena.length);
            minuto=timeParts[1];
            segundo=timeParts[2];
            if (minuto==undefined){
                minuto=0;
                segundo=0;
                hora=0;
            }
           // console.log("Horas: "+hora+"-"+minuto+"-"+segundo);

            let value=(year)+"-"+padNumber(month)+"-"+padNumber(day)+ ""+ padNumber(hora) +":"+ padNumber(minuto)+":"+ padNumber(segundo);
           // console.log(value)
            const date = new Date(value);
            const isValidDate = !isNaN(date.valueOf());
            // console.log("Format:"+dateString);
            // console.log("Formatdate:"+date);
            // console.log("Formatdate:"+date.getMonth()+1);
            if (!isValidDate) {
                return null;
            }
             return new DateTimeModel({
                year: date.getFullYear(),
                month: date.getMonth()+1 ,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
                timeZoneOffset: date.getTimezoneOffset()
            });
        }   
        return null;
    }

    public static fromLocalString2(dateString: string): DateTimeModel {

        const date = new Date(dateString);

        const isValidDate = !isNaN(date.valueOf());

        if (!dateString || !isValidDate) {
            return null;
        }

        return new DateTimeModel({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            timeZoneOffset: date.getTimezoneOffset()
        });
    }

    private isInteger(value: any): value is number {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }

    public toString(): string {
        if (this.isInteger(this.year) && this.isInteger(this.month) && this.isInteger(this.day)) {
            const year = this.year.toString().padStart(2, '0');
            const month = this.month.toString().padStart(2, '0');
            const day = this.day.toString().padStart(2, '0');

            if (!this.hour) {
                this.hour = 0;
            }
            if (!this.minute) {
                this.minute = 0;
            }
            if (!this.second) {
                this.second = 0;
            }
            if (!this.timeZoneOffset) {
                this.timeZoneOffset = new Date().getTimezoneOffset();
            }

            const hour = this.hour.toString().padStart(2, '0');
            const minute = this.minute.toString().padStart(2, '0');
            const second = this.second.toString().padStart(2, '0');

            const tzo = -this.timeZoneOffset;
            const dif = tzo >= 0 ? '+' : '-',
            pad = function(num) {
                const norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };

            const isoString = `${pad(year)}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:${pad(second)}${dif}${pad(tzo / 60)}:${pad(tzo % 60)}`;
            return isoString;
        }

        return null;
    }
}

