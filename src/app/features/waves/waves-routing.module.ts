import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WavesComponent } from "./waves.component";
import { WavesModule } from "./waves.module";

export const ROUTES: Routes = [
    {
        path: '',
        component: WavesComponent,
    }
];

@NgModule({
    imports: [WavesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class WavesRoutingModule {}