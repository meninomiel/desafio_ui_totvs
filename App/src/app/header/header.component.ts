import { Component, OnInit, Input } from '@angular/core';
import { PoFieldModule, PoSelectOption, PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  input: string;
  errorPattern: string;
  event: string;
  @Input() help: string;
  icon: string;
  @Input() label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  @Input() placeholder: string;
  properties: Array<string>;
  minDate: string | Date;  

  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.input = undefined;
  }

  toggleBusiness(){
    let businessFields = document.querySelector('.fields.business');
    businessFields.classList.toggle('business-show');

    let linkIcon = document.querySelector('.link-business-icon');
    linkIcon.classList.toggle('po-icon-arrow-up');
  }

}
