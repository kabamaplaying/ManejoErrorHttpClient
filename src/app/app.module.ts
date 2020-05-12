import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerErrorInterceptor } from './interceptors/servererrorinterceptor';
import { GlobalErrorHandleService } from './services/globalerrorhandler.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [ { provide: ErrorHandler, useClass: GlobalErrorHandleService },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
