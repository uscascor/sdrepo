import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './about/profile/profile.component';
import { WorkexpComponent } from './about/workexp/workexp.component';
import { WorexpdetailsComponent } from './about/workexp/worexpdetails/worexpdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { HobbiesDetailComponent } from './interests/hobbies-detail/hobbies-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSubmitComponent } from './contact/contact-submit/contact-submit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes	= [								
  { path: '', redirectTo:	'home', pathMatch: 'full' },
	{ path: 'home', component:	HomeComponent },    		
	{ path: 'about', component:	AboutComponent , children: [
      { path: '', redirectTo:	'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'workexp', component: WorkexpComponent, children: [
          { path: '', redirectTo: 'user/1', pathMatch: 'full' },
          { path: 'user/:id', component: WorexpdetailsComponent }
        ]
      }
    ]
  },
	{ path: 'projects', component: ProjectsComponent },
  { path: 'ui-projects', component: ProjectsComponent },
  { path: 'uiprojects', component: ProjectsComponent },
  { path: 'interests', redirectTo: 'interests/hobbies', pathMatch: 'full' },
	{ path: 'interests/hobbies', component:	InterestsComponent, children: [
      { path: '', redirectTo:	'0', pathMatch: 'full' },
      { path: ':id', component: HobbiesDetailComponent },
      { path: 'other-interests', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/contactSubmit', component: ContactSubmitComponent },
  { path: 'not-found', component: PageNotFoundComponent},	
  { path: '**', redirectTo: '/not-found'}  
];
@NgModule({													
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [												
		RouterModule
	]
})
export class AppRoutingModule {}
