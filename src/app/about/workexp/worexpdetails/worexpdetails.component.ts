import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-worexpdetails',
  templateUrl: './worexpdetails.component.html',
  styleUrls: ['./worexpdetails.component.css']
})
export class WorexpdetailsComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {				
      this.id = +params.id;
      console.log(this.id);
		 });
  }

}
