import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../homes.service';
import { Housesinterface } from '../../housesinterface';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent implements OnInit {
  house?: Housesinterface; // house can potentially be undefined

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { // check if id is not null
      const houseId = +id;
      this.house = this.housingService.getHousingLocationById(houseId);
    }
  }
}
