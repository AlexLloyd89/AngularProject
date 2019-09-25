import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotComponent } from "./lazyOrNot/not/not.component";
import { LazyComponent } from "./lazyOrNot/lazy/lazy.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  //Home route
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  //Lazy & non-lazy route
  {
    path: "not",
    component: NotComponent,
    children: [
      {
        path: "lazy",
        component: LazyComponent
      }
    ]
  },
  //Form route
  { path: "form", component: FormComponent },
  //List route
  { path: "list", component: ListComponent },
  //Catch all
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
