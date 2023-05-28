import { Component, OnInit } from '@angular/core';
import { HousingService } from '../homes.service';
import { Housesinterface } from '../housesinterface';

@Component({
  selector: 'app-featured-homes',
  templateUrl: './featured-homes.component.html',
  styleUrls: ['./featured-homes.component.css']
})
export class FeaturedHomesComponent implements OnInit {
  houses: Housesinterface[] = []; // Define houses here

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.houses = this.housingService.getAllHousingLocations();
  }
}
