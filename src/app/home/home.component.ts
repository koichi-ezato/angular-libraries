import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  mode = 'side';
  opened = true;

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  constructor(
    private ngZone: NgZone,
  ) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
  }

  ngOnInit(): void {
    this.handleResizeWindow(window.innerWidth);
  }

  toggle() {
    this.sidenav.toggle()
      .catch(err => {
        console.log(err);
      });
  }

  private handleResizeWindow(width: number) {
    if (720 < width) {
      this.opened = true;
      this.mode = 'side';
    } else {
      this.opened = false;
      this.mode = 'over';
    }
  }
}
