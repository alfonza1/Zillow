import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../homes.service';
import { Housesinterface } from '../../housesinterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-featured-homes',
  templateUrl: './featured-homes.component.html',
  styleUrls: ['./featured-homes.component.css']
})
export class FeaturedHomesComponent implements OnInit {
  houses: Housesinterface[] = []; // Define houses here

  constructor(private router: Router, private housingService: HousingService) { 

  }

  ngOnInit(): void {
    this.houses = this.housingService.getAllHousingLocations();
  }

  onHouseClick(house: Housesinterface): void {
    this.router.navigate(['/home-items', house.id]);
  }
}
