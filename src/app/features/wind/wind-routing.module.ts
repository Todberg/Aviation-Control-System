import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WindComponent } from "./wind.component";
import { WindModule } from "./wind.module";

export const ROUTES: Routes = [
    {
        path: '',
        component: WindComponent,
    }
];

@NgModule({
    imports: [WindModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class WindRoutingModule {}