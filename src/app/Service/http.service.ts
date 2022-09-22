import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryModel } from '../Models/HistoryModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL: string = 'http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&format=1';
  constructor(public httpClient: HttpClient) { }

  getAllCurrencies(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL);
  }

}
