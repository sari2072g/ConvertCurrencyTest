import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';

const routes: Routes = [
{ path: 'currency-converter', component: CurrencyConverterComponent },
{  path: 'about', component: AboutComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
