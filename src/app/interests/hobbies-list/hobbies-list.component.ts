import { Component, OnInit } from '@angular/core';

import { HobbyService } from '../hobby.service';
import { Hobby } from '../hobby.model';

@Component({
  selector: 'app-hobbies-list',
  templateUrl: './hobbies-list.component.html',
  styleUrls: ['./hobbies-list.component.css']
})
export class HobbiesListComponent implements OnInit {
  hobbies: Hobby[];
  constructor(private hobbyservice: HobbyService) { }
  ngOnInit() {
    this.hobbies = this.hobbyservice.getHobbies();
  }

}
