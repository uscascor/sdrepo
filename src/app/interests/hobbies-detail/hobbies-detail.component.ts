import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { HobbyService } from '../hobby.service';
import { Hobby } from '../hobby.model';

@Component({
  selector: 'app-hobbies-detail',
  templateUrl: './hobbies-detail.component.html',
  styleUrls: ['./hobbies-detail.component.css']
})
export class HobbiesDetailComponent implements OnInit {
  index: number;
  hobby: Hobby;
  constructor(private hobbyservice: HobbyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(								
      (params: Params) => {				
        this.index = +params['id'];
        this.hobby = this.hobbyservice.getHobby(this.index);
      }
    );
  }

}
