import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClaimComponent } from './claim/claim.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    AboutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
