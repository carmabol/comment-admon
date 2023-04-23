import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing';
import { CommentEffects } from './app/store/effects/comment.effect';
import { UserEffects } from './app/store/effects/user.effect';
import { commentReducer } from './app/store/reducer/comment.reducer';
import { userReducer } from './app/store/reducer/user.reducer';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService,
    importProvidersFrom(AppRoutingModule), //-- TODO: Relacionar el routing,
    provideStore({ comments: commentReducer, user:userReducer }), //-- TODO: { store: reducer, }
    provideEffects([CommentEffects,UserEffects])
  ]
})
