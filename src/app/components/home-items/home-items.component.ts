import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../homes.service';
import { Housesinterface } from '../../housesinterface';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent implements OnInit {
  house: Housesinterface | undefined; // change the type here

  constructor(private route: ActivatedRoute, private housingService: HousingService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // convert to number here
    if(id !== null) { // check if id is not null
        this.house = this.housingService.getHousingLocationById(id);
    }
  }
 
}
