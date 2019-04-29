import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { TranslatorService } from './translator.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ TranslatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
