import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  //Home route
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  //Lazy
  {
    path: "not",
    loadChildren: "./lazy/lazy.module#LazyModule"
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
