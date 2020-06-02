import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HomeComponent} from '../home/home.component';
import {PageTitleService} from '../service/page-title.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.styl']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  public pageTitle = 'メニュー';

  private subscription: Subscription;

  constructor(
    public home: HomeComponent,
    private pageTitleService: PageTitleService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.pageTitleService.pageTitleSubscriber.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav(): void {
    this.home.sidenav.toggle()
      .catch(err => console.log(err));
  }
}
