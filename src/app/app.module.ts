import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardBtnComponent } from './shared/components/buttons/standard-btn/standard-btn.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [AppComponent, SvgIconComponent, StandardBtnComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
