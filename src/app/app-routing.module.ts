import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: 'overview' },
  { 
    path: 'overview',
    loadChildren: () => import('./features/overview/overview-routing.module')
      .then(module => module.OverviewRoutingModule)
  },
  {
    path: 'wind', 
    loadChildren: () => import('./features/wind/wind-routing.module')
      .then(module => module.WindRoutingModule)
  },
  { 
    path: 'waves',
    loadChildren: () => import('./features/waves/waves-routing.module')
      .then(module => module.WavesRoutingModule)
  },
  { 
    path: 'weather',
    loadChildren: () => import('./features/weather/weather-routing.module')
      .then(module => module.WeatherRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
