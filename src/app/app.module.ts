import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './about/profile/profile.component';
import { WorkexpComponent } from './about/workexp/workexp.component';
import { WorexpdetailsComponent } from './about/workexp/worexpdetails/worexpdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectlistComponent } from './projects/projectlist/projectlist.component';
import { InterestsComponent } from './interests/interests.component';
import { HobbiesListComponent } from './interests/hobbies-list/hobbies-list.component';
import { HobbiesDetailComponent } from './interests/hobbies-detail/hobbies-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSubmitComponent } from './contact/contact-submit/contact-submit.component';
import { DropdownDirective } from './dropdown.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    WorkexpComponent,
    WorexpdetailsComponent,
    ProjectsComponent,
    ProjectlistComponent,
    InterestsComponent,
    HobbiesListComponent,
    HobbiesDetailComponent,
    ContactComponent,
    ContactSubmitComponent,
    DropdownDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
