import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JpPostService} from '../../../projects/jp-post/src/src/lib/jp-post.service';

@Component({
  selector: 'app-jp-post',
  templateUrl: './jp-post.component.html',
  styleUrls: ['./jp-post.component.styl']
})
export class JpPostComponent implements OnInit {
  postalCodeControl = new FormControl('', [Validators.required, Validators.pattern('^\\d{3}\\-{0,1}\\d{4}$')]);
  prefControl = new FormControl();
  addressControl = new FormControl();
  cityControl = new FormControl();
  townControl = new FormControl();
  fullAddressControl = new FormControl();

  err = null;

  jpPostForm: FormGroup = new FormGroup({
    postalCodeControl: this.postalCodeControl,
    prefControl: this.prefControl,
    addressControl: this.addressControl,
    cityControl: this.cityControl,
    townControl: this.townControl,
    fullAddressControl: this.fullAddressControl,
  });

  constructor(
    private jpPostService: JpPostService,
  ) { }

  ngOnInit(): void {
  }

  onClickClear(): void {
    this.postalCodeControl.setValue(null);
    this.prefControl.setValue(null);
    this.addressControl.setValue(null);
    this.cityControl.setValue(null);
    this.townControl.setValue(null);
    this.fullAddressControl.setValue(null);
    this.err = null;
  }

  onClickGetAddress(): void {
    this.jpPostService.get(this.postalCodeControl.value)
      .then(response => {
        if (response.code === 200) {
          this.prefControl.setValue(response.data.pref);
          this.addressControl.setValue(response.data.address);
          this.cityControl.setValue(response.data.city);
          this.townControl.setValue(response.data.town);
          this.fullAddressControl.setValue(response.data.fullAddress);
        } else {
          this.err = response.code.toString() + '：' + response.message;
        }
      })
      .catch(err => {
        this.err = err;
        console.log(err);
      });
  }
}
