import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxCalculatorComponent } from "./tax-calculator/tax-calculator.component";
import { TeamsComponent } from "./teams/teams.component";

const routes: Routes = [
  {
    path: '',
    component: TaxCalculatorComponent
  },
  {
    path: 'tax-calculator',
    component: TaxCalculatorComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
