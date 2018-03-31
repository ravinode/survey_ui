import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { SurveyService } from './service/survey-service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SurveyQaComponent } from './survey-qa/survey-qa.component';

const appRoute: Routes = [
  {path: 'welcome', component: WelcomePageComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomePageComponent,
    SurveyQaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
