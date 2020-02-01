import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images: {source: string, text: string }[] = [
    { "source": "https://picsum.photos/id/218/4752/3168", "text": "Think a little less, Live a little more" },
    { "source": "https://picsum.photos/id/185/3995/2662", "text": "Memory is the fourth dimension of any landscape" },
    { "source": "https://picsum.photos/id/279/5616/3744", "text": "If there's a will there's a wave" },
    { "source": "https://picsum.photos/id/296/3072/2048", "text": "Never measure the height of a mountain until you reach the top" }
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 1500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;    
  }  
  ngOnInit() {
  }

}
