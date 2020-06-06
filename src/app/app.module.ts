import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { JpPostComponent } from './jp-post/jp-post.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {JpPostService} from '../../projects/jp-post/src/src/lib/jp-post.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { JpBankComponent } from './jp-bank/jp-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JpPostComponent,
    PageHeaderComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent,
    JpBankComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CdkScrollableModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatDividerModule,
  ],
  providers: [JpPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
