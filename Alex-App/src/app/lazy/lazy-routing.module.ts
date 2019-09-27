import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotComponent } from "./lazyOrNot/not/not.component";
import { LazyComponent } from "./lazyOrNot/lazy/lazy.component";

const routes: Routes = [
  //Lazy route
  {
    path: "",
    component: NotComponent,
    children: [
      {
        path: "lazy",
        component: LazyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
