import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoTabComponent } from './info-tab/info-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
