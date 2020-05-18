import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() hotelName: string;
  @Input() hotelImage: string;
  @Input() hotelDistance: string;
  @Input() hotelRatingNumber: string;
  @Input() hotelEvaluation: string;
  @Input() hotelRating: string;
  @Input() bestHotel: string;
  @Input() hotelSugestion: string;
  @Input() priceBefore: string;
  @Input() currentPrice: string;
  @Input() nightNumber: string;
  @Input() moreinfoVisibility: string;
  @Input() detailText: string;


  constructor() { }

  ngOnInit(): void {
  }

  toggleMoreInfo(sender){
    let linkIcon = sender.target.querySelector('.moreinfo-link');
    linkIcon.classList.toggle('flip-icon');

    (this.moreinfoVisibility == 'true') ? this.moreinfoVisibility = 'false' : this.moreinfoVisibility = 'true';
  }

}
