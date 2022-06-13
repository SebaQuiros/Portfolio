import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NetworksComponent } from './components/networks/networks.component';
import { MailComponent } from './components/mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NetworksComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
