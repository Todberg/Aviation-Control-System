import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "./weather.component";
import { WeatherModule } from "./weather.module";

export const ROUTES: Routes = [
    {
        path: '',
        component: WeatherComponent,
    }
];

@NgModule({
    imports: [WeatherModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class WeatherRoutingModule {}