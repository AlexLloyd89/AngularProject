import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { LazyComponent } from "./lazyOrNot/lazy/lazy.component";
import { NotComponent } from "./lazyOrNot/not/not.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FormComponent } from "./form/form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Material Imports
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { LazyModule } from "./lazy/lazy.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LazyComponent,
    // NotComponent,
    NavigationComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LazyModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
