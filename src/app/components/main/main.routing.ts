import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './pages/main.component';


const routes: Routes = [
  
  // Security routes
  { path: 'main', component: MainComponent },
  /*{ path: 'token', component: TokenComponent },
  { path: 'error', component: ErrorComponent },*/
  // Default route
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRouting { }
