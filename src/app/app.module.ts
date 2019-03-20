import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ApiService } from './services/api..service.';
import { APIInterceptor } from './http.interceptor';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { InfoCardComponent } from './components/info-section/info-card/info-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StartupsComponent } from './components/startups/startups.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoSectionComponent,
    ContactUsComponent,
    InfoSectionComponent,
    InfoCardComponent,
    CarouselComponent,
    StartupsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
