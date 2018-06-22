import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CountComponent} from './count/count.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'count', component: CountComponent},
  {path: '**', component: CountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CountComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
