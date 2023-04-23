import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthenticatedGuard } from './providers/guards/auth/authenticated.guard';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Security routes

  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./components/about/about.component').then((mod) => mod.AboutComponent),
  },

  {
    path: 'main',
    loadChildren: () =>
      import('../app/components/main/main.routing').then(
        (m) => m.MAIN_ROUTES
      ),
  },
  // Unknown routes
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
