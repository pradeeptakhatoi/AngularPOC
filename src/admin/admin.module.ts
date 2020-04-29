import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AdminDashboardComponent } from "./dashboard/dashboard.component";
import { AdminProductsComponent } from "./products/admin-products.component";
import { AdminLayoutComponent } from "./admin-layout.component";

const childRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "", component: AdminDashboardComponent },
      { path: "products", component: AdminProductsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
  ],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [],
  providers: [],
})
export class AdminModule {}
