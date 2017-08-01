import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { GamePage } from '../pages/game/game';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { AuthService } from '../services/auth';
import { RoomService } from '../services/room.service';
import { CommandProcessorService } from '../services/command-processor.service';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    GamePage,
    SignupPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    GamePage,
    SignupPage,
    SigninPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuPage,
    GamePage,
    AuthService,
    CommandProcessorService,
    RoomService
  ]
})
export class AppModule {
}
