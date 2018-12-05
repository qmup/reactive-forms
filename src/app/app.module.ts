import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoDynamicFormsComponent } from './demo-dynamic-forms/demo-dynamic-forms.component';

@NgModule({
   declarations: [
      AppComponent,
      DemoDynamicFormsComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
