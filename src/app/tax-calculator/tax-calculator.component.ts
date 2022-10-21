import { Component, OnInit } from '@angular/core';
import { TaxCalcService } from "../service/tax-calc.service";

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {

  grossObject: any = {
    grossSalary: 0,
    nssf: true,
    nhif: true,
    isPension: false,
    pensionAmount: 0,
    isMortgageInterest: false,
    mortgageInterestAmount: 0,
    isInsurance: false,
    insuranceAmount: 0
  };
  grossResponse: any;
  errorResponse: any;
  currentTab = 'netPay'

  constructor(
    private taxCalcService: TaxCalcService
  ) { }

  ngOnInit(): void {
  }

  toggleTab(tab: string): void {
    this.currentTab = tab;
  }

  calculateNetSalary(): void {
    this.taxCalcService.calculateNetSalary(this.grossObject).subscribe(
      (res: any) => {
        console.log(res);
        this.grossResponse = res.body ?? {};
      },
      (error: any) => {
        console.log(error);
        this.errorResponse = error.error;
      }
    )
  }

}
