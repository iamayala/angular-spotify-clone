import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyContainerComponent } from './components/body-container/body-container.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeroSectionItemComponent } from './components/hero-section-item/hero-section-item.component';
import { GreenPlayBtnComponent } from './components/green-play-btn/green-play-btn.component';
import { HomeBodySectionComponent } from './components/home-body-section/home-body-section.component';
import { HomeBodySectionHeaderComponent } from './components/home-body-section-header/home-body-section-header.component';
import { HomeBodySectionBodyComponent } from './components/home-body-section-body/home-body-section-body.component';
import { HomeBodySectionBodyItemComponent } from './components/home-body-section-body-item/home-body-section-body-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyContainerComponent,
    SidebarItemComponent,
    TopBarComponent,
    HeroSectionComponent,
    HeroSectionItemComponent,
    GreenPlayBtnComponent,
    HomeBodySectionComponent,
    HomeBodySectionHeaderComponent,
    HomeBodySectionBodyComponent,
    HomeBodySectionBodyItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
