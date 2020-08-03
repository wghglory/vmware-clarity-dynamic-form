import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { DynamicFormControlComponent } from '@shared/dynamic-form-control/dynamic-form-control.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormControlComponent,
    ...routedComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
