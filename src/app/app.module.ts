import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalCardComponent } from './animal-card.component';
import { SpriteComponent } from './sprite.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    SpriteComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
