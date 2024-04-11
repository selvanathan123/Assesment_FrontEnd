import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from 'src/configuration';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    public config: Configuration
   ) {}

   addQuote(quoteData: any): Observable<any> {
    debugger;
    return this.http.post<any>(this.config.home, quoteData);
  }
}
