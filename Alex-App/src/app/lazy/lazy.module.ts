import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotComponent } from "../lazyOrNot/not/not.component";
import { LazyComponent } from "../lazyOrNot/lazy/lazy.component";
import { LazyRoutingModule } from "./lazy-routing.module";

@NgModule({
  declarations: [LazyComponent, NotComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazyModule {}
