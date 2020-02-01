import { Directive, HostListener, HostBinding, OnInit } from '@angular/core'

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
	@HostBinding('class.show') isToShow: boolean = false;
	constructor() { }
	ngOnInit() { }
	@HostListener('click') toggleOpen() {
		this.isToShow = !this.isToShow;
		console.log(this.isToShow);
	}
}