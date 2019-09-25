import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { LazyComponent } from "./lazyOrNot/lazy/lazy.component";
import { NotComponent } from "./lazyOrNot/not/not.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyComponent,
    NotComponent,
    NavigationComponent,
    FormComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
