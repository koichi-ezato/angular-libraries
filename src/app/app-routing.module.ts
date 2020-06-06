import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JpPostComponent} from './jp-post/jp-post.component';
import {MenuComponent} from './menu/menu.component';
import {JpBankComponent} from './jp-bank/jp-bank.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: MenuComponent},
      {path: 'jp-post', component: JpPostComponent},
      {path: 'jp-bank', component: JpBankComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
