import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from 'src/configuration';

@Injectable({
  providedIn: 'root'
})
export class QuoteslistService {

  constructor(
    private http: HttpClient,
    public config: Configuration
   ) {}

   getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(this.config.getquotes);
  }

  updateQuote(id: number, payload: any): Observable<any> {
    debugger
    const url = `${this.config.editquotes}/${id}`;
    return this.http.put<any>(url, payload);
  }
  deleteQuote(id: number): Observable<any> {
    debugger
    const url = `${this.config.deletequotes}/${id}`;
    return this.http.delete<any>(url);
  }

}
