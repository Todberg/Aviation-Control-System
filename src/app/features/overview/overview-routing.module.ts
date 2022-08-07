import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewComponent } from "./overview.component";
import { OverviewModule } from "./overview.module";

export const ROUTES: Routes = [
    {
        path: '',
        component: OverviewComponent,
    }
];

@NgModule({
    imports: [OverviewModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class OverviewRoutingModule {}