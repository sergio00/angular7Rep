import { Observable } from 'rxjs';
import { Tramites } from './modelo/tramites';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandejaTramitesService {

  constructor(private httpClient: HttpClient) {

   }

  public getList(): Observable<Tramites[]> {
    return this.httpClient.get<Tramites[]>('http://localhost:7778/listTramites');
  }


  public getLista(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:7778/listTramites');
  }

  public getListaAny(url:string,objeto:any):Observable<any[]> {
    return this.httpClient.post<any[]>(url,objeto);
  }


  
}
