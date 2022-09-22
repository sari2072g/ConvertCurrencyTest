import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistoryModel } from 'src/app/Models/HistoryModel';
import { CurrenciesService } from 'src/app/Service/currencies.service';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public listOfCurrencies: any;
  public currencyConverterFormGroup: FormGroup = this.fb.group({
    From: [null, Validators.required],
    To: [null, Validators.required],
    NumOfConvert: [null,
      [Validators.required,
      Validators.pattern(/[0-9]/)]
    ]
  });

  constructor(private fb: FormBuilder,
    private currenciesService: CurrenciesService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('historyOfConverter') == null)
      sessionStorage.clear();
    this.currenciesService.getAllCurrencies().subscribe(
      x => {
        this.listOfCurrencies = x['rates'];
        this.listOfCurrencies = Object.keys(x['rates']).map(key => ({ type: key, value: x['rates'][key] }));
      }
    )
  }
  changeTo() {
    let addToHistory = new HistoryModel();
    addToHistory.from = this.currencyConverterFormGroup.controls['From'].value;
    addToHistory.numOfConvert = this.currencyConverterFormGroup.controls['NumOfConvert'].value;
    addToHistory.to = this.currencyConverterFormGroup.controls['To'].value;
    let isThisObjectApper = this.currenciesService.historyOfConverter.
      find(x => x.from == addToHistory.from && x.numOfConvert == addToHistory.numOfConvert
        && x.to == addToHistory.to)
    if (addToHistory.from && addToHistory.numOfConvert && addToHistory.to && isThisObjectApper == null) {
      this.currenciesService.historyOfConverter.push(addToHistory);
      // sessionStorage.setItem('historyOfConverter', JSON.stringify(this.currenciesService.historyOfConverter));
    }
  }

}
