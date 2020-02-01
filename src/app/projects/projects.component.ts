import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [
    new Project('Recipe Book','Angular8, Bootstrap3, TypeScript',
    'https://picsum.photos/id/292/3852/2556','https://app190812.firebaseapp.com'),
    new Project('Tribute Page','HTML, CSS',
    'https://picsum.photos/id/112/4200/2800','https://codepen.io/uscascor/full/RzOdzp'),
    new Project('Coming soon..','Angular8, Bootstrap4, TypeScript',
    'https://picsum.photos/id/401/5184/3456','#')
  ];
  constructor() { }
  ngOnInit() {
  }

}
