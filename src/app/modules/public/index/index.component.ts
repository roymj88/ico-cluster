import { Component, OnInit } from '@angular/core';
import { ListingService } from "../../../common/services/listing/listing.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private _listingService: ListingService
  ) { }

  ngOnInit() {
    this.getListings();
  }

  getListings = () => {
    this._listingService.getList()
      .subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
  }

}
