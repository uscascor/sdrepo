import { Component, OnInit } from '@angular/core';
import { HobbyService } from './hobby.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  providers: [HobbyService]
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
