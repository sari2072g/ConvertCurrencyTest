import { Injectable } from '@angular/core';
import { HistoryModel } from '../Models/HistoryModel';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  public historyOfConverter: HistoryModel[] = []

  constructor(private httpService: HttpService) { }

  getAllCurrencies() { 
    return this.httpService.getAllCurrencies(); 
  }

}
