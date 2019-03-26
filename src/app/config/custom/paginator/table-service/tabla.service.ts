import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GithubApi {
  items: GithubIssue[];
  total_count?: number;
}
//https://api.randomuser.me/?page=13&results=10&sortField=name&sortOrder=descend

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

export interface NutritionApi {
  count?: number;
  items?: NutitrionDetail[]
}

export interface NutitrionDetail {
  _id?: string;
  name?: string;
  _v?: string;
  iron?: {
    value?: number,
    unit?: string
  };
  calcium?: {
    value?: number,
    unit?: string
  };
  sodium?: {
    value?: number,
    unit?: string
  };
  protein?: {
    value?: number,
    unit?: string
  };
  carbs?: {
    value?: number,
    unit?: string
  };
  fat?: {
    value?: number,
    unit?: string
  };
  calories?: {
    value?: number,
    unit?: string
  };
  serving?: string;
}


@Injectable({
  providedIn: 'root'
})
export class TablaService {
  data: any;
  observable: any;

  constructor(private http: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number, per_page: number): Observable<any> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}&per_page=${per_page}`;//

    return this.http.get<any>(requestUrl);
  }

  getRepoNutrition(): Observable<any> {
    // https://infinite-earth-4803.herokuapp.com/nutrition/desserts?filter=&limit=10&order=nameToLower&page=8
    const href = 'https://infinite-earth-4803.herokuapp.com/nutrition/desserts/';
    return this.http.get<any>(href);

  }


}
