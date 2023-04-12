import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthenticatedGuard } from './providers/guards/auth/authenticated.guard';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Security routes
  {
    path: 'main',
    loadChildren: () =>
      import('./components/main/main.module').then(
        (m) => m.MainModule
      ),
  },
  // Unknown routes
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
