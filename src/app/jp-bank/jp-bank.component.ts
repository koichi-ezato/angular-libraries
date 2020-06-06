import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JpBankService} from '../../../projects/jp-bank/src/lib/jp-bank.service';

@Component({
  selector: 'app-jp-bank',
  templateUrl: './jp-bank.component.html',
  styleUrls: ['./jp-bank.component.styl']
})
export class JpBankComponent implements OnInit {
  bankCodeControl1 = new FormControl('', [Validators.required, Validators.pattern('^\\d{4}')]);
  bankCodeControl2 = new FormControl('', [Validators.required, Validators.pattern('^\\d{4}')]);
  bankNameControl = new FormControl();
  bankKanaControl = new FormControl();
  bankBranchCodeControl = new FormControl('', [Validators.required, Validators.pattern('^\\d{3}')]);
  bankBranchNameControl = new FormControl();
  bankBranchKanaControl =  new FormControl();

  bankForm: FormGroup = new FormGroup({
    bankCodeControl: this.bankCodeControl1,
    bankNameControl: this.bankNameControl,
    bankKanaControl: this.bankKanaControl,
  });

  bankBranchForm: FormGroup = new FormGroup({
    bankCodeControl: this.bankCodeControl2,
    bankBranchCodeControl: this.bankBranchCodeControl,
    bankBranchNameControl: this.bankBranchNameControl,
    bankBranchKanaControl: this.bankBranchKanaControl,
  });

  bankErr = null;
  bankBranchErr = null;

  constructor(
    private jpBankService: JpBankService,
  ) { }

  ngOnInit(): void {
  }

  onClickClearBankInfo(): void {
    this.bankForm.reset();
    this.bankErr = null;
  }

  onClickClearBankBranchInfo(): void {
    this.bankBranchForm.reset();
    this.bankBranchErr = null;
  }

  onClickGetBankInfo(): void {
    this.jpBankService.getBankInfo(this.bankCodeControl1.value)
      .then(response => {
        this.bankNameControl.setValue(response.name);
        this.bankKanaControl.setValue(response.kana);
        this.bankCodeControl2.setValue(response.code);
        this.bankErr = null;
      })
      .catch(err => {
        this.bankErr = err;
        console.log(err);
      });
  }

  onClickGetBankBranchInfo(): void {
    this.jpBankService.getBankBranchInfo(this.bankCodeControl2.value, this.bankBranchCodeControl.value)
      .then(response => {
        this.bankBranchNameControl.setValue(response.name);
        this.bankBranchKanaControl.setValue(response.kana);
        this.bankBranchErr = null;
      })
      .catch(err => {
        this.bankBranchErr = err;
        console.log(err);
      });
  }
}
