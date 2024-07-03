import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserModule.withServerTransition({appId: 'serverApp'})
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
