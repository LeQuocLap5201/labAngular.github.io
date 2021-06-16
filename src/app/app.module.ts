import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductlistComponent},
  {path: 'detail/:id', component: DetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    StarComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
