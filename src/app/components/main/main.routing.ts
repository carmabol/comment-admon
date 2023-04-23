import { Routes} from '@angular/router';
import { MainComponent } from './pages/main.component';


export const MAIN_ROUTES: Routes = [
  // Security routes
  { path: 'main', component: MainComponent },
  /*{ path: 'token', component: TokenComponent },
  { path: 'error', component: ErrorComponent },*/
  // Default route
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
