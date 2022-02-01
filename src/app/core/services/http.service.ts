import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseNews } from 'src/app/interfaces/response-news.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public path = environment.PATH;
  constructor(
    private http: HttpClient
  ) { }

  public getDataNews$(name: string, page = 0): Observable<ResponseNews>{
    const recource = `search_by_date?query=${name}&page=${page}`;
    return this.http.get<ResponseNews>(`${this.path}${recource}`);
  }
  public getDataNewsAll$(page = 2): Observable<ResponseNews>{
    const recource = `search_by_date?page=${page}`;
    return this.http.get<ResponseNews>(`${this.path}${recource}`);
  }
}
