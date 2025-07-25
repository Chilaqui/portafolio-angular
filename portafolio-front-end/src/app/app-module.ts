import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ToggleThemeComponent } from './components/toggle-theme-component/toggle-theme-component';
import { ProjectCardComponent } from './components/project-card-component/project-card-component';
import { HomeComponent } from './routes/home-component/home-component';
import { ProjectsComponent } from './routes/projects-component/projects-component';
import { ContactComponent } from './routes/contact-component/contact-component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    ToggleThemeComponent,
    ProjectCardComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
