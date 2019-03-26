import { FormControl } from '@angular/forms';
export class ValidacionesFactory {

validaFormatoClave(psClave:string){
        let  lc1="\\";
        let  lc2="[";
        let  lc3="]";
        let  lc4="¨";
        let  lc5="`";
        let  lc6="´";
        let  lc7="Ç";
        let  lc8="^";
        let PASS_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*&+.:,;=()"#·?_¿}¡{%/-])[A-Za-z\d$@$!%*&+.:,;=()"#·?_¿}¡{%/-]{8,12}$/;

        if (psClave.indexOf(lc1)>0 ){
          return("Simbolo "+lc1+" no permitido");
        }else if (psClave.indexOf(lc2)>0) {
            return("Simbolo "+lc2+" no permitido")
        }else if (psClave.indexOf(lc3)>0) {
            return ("Simbolo "+lc3+" no permitido");
        }else if (psClave.indexOf(lc4)>0) {
          return("Simbolo "+lc4+" no permitido");
        }else if (psClave.indexOf(lc5)>0) {
          return ("Simbolo "+lc5+" no permitido");
        }else if (psClave.indexOf(lc6)>0) {
          return("Simbolo "+lc6+" no permitido");
        }else if (psClave.indexOf(lc7)>0) {
          return("Simbolo "+lc7+" no permitido");
        }else if (psClave.indexOf(lc8)>0) {
          return("Simbolo "+lc8+" no permitido");
        }
        let isMatchRegex = PASS_REGEXP.test(psClave);
        if (isMatchRegex == false) {
          return("Formato de Clave Invalida");
        }
        return "OK";
}

validaFormatoCorreo(psCorreo:string){
    let EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let isMatchRegex = EMAIL_REGEXP.test(psCorreo);
    if (isMatchRegex == false) {
      return("La Dirección de Correo es Invalida.");
    }
    return "OK";
   }

   fechaHora() {
    var months=new Array(13);
    months[1]="Enero";
    months[2]="Febrero";
    months[3]="Marzo";
    months[4]="Abril";
    months[5]="Mayo";
    months[6]="Junio";
    months[7]="Julio";
    months[8]="Agosto";
    months[9]="Septiembre";
    months[10]="Octubre";
    months[11]="Noviembre";
    months[12]="Diciembre";
    var time=new Date();
    var lmonth=months[time.getMonth() + 1];
    var date=time.getDate();
    var year=time.getFullYear();
    if (year < 2000)
      year = year + 1900;
    
    return "" + date + " de "+lmonth + " del " + year;  
  };

  isDateValid(value :string) :boolean {
    const regexValid :boolean = value.match(/^(0[1-9]|1[0-9]|2[0-9]|3[0-1]){1}\.(0[1-9]|1[0-2]){1}\.\d\d\d\d$/g) === null ? false : true; // you get the idea.
    
    if (!regexValid) { return null; } 
    // if this doesnt match the date format is in wrong format (user made a syntax error).
    // Next test must be done for semantics (e. g. 29.02.2018 is invalid) :
    
    const dateItems :string[] = value.split(/\./g); 
    // you can split the value like this as you have checked previously if user entered this format.
    
    const isDateValid :boolean = regexValid && parseInt(dateItems[1], 10) <= new Date(parseInt(dateItems[2], 10), parseInt(dateItems[1], 10), 0).getDate();
    
    return isDateValid;

  }

  toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }

  isNumber(value: any): value is number {
    return !isNaN(this.toInteger(value));
  }

  padNumber(value: number) {
    if (this.isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return '';
    }
  }


  toFechaCadena(valor:any){
    return this.padNumber(valor.day)+"/"+this.padNumber(valor.month)+"/"+valor.year;
  }


   DateTimeValidator = (fc: FormControl) => {
    const date = new Date(fc.value);
    const isValid = !isNaN(date.valueOf());
    return isValid ? null : {
        isValid: {
            valid: false
        }
    };
  };

}