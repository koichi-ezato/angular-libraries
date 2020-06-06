import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JpBankService {
  private url = 'https://bank.teraren.com/banks/';
  private headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
  ) { }

  getBankInfo(bankCode: string): Promise<BankInfo> {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.url + bankCode + '.json', {headers: this.headers})
      .toPromise()
      .then(response => {
        if ('error' in response) {
          return  Promise.reject(response);
        } else {
          return Promise.resolve(response as BankInfo);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  getBankBranchInfo(bankCode: string, branchCode: string): Promise<BankInfo> {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.url + bankCode + '/branches/' + branchCode + '.json', {headers: this.headers})
      .toPromise()
      .then(response => {
        if ('error' in response) {
          return Promise.reject(response);
        } else {
          return Promise.resolve(response as BankInfo);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
}

export interface BankInfo {
  code: string;
  kana: string;
  name: string;
}
