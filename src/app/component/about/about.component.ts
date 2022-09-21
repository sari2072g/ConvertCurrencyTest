import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HistoryModel } from 'src/app/Models/HistoryModel';
import { CurrenciesService } from 'src/app/Service/currencies.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public listOfCurrencies: HistoryModel[] = [];
  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit(): void {
     this.listOfCurrencies = this.currenciesService.historyOfConverter;
    // this.listOfCurrencies =JSON.parse(sessionStorage.getItem('historyOfConverter'));
  }
}
