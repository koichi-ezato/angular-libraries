import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JpPostService {
  private url = 'https://api.zipaddress.net/';
  private headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
  ) { }

  get(zip: string): Promise<ZipSearch> {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.url + '?zipcode=' + zip + '&lang=ja', {headers: this.headers})
      .toPromise()
      .then(response => response as ZipSearch)
      .catch(err => {
        return Promise.reject(err);
      });
  }
}

export interface ZipSearch {
  code: string;
  data: {
    pref: string,
    address: string,
    city: string,
    town: string,
    fullAddress: string,
  };
}
