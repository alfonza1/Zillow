import { Injectable } from '@angular/core';
import { Housesinterface } from './housesinterface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housesinterface: Housesinterface[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: "yes",
      laundry: "yes"
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: "yes",
      laundry: "yes"
    }
  ];

  getAllHousingLocations(): Housesinterface[] {
    return this.housesinterface;
  }

  getHousingLocationById(id: number): Housesinterface | undefined {
    return this.housesinterface.find(housesinterface => housesinterface.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/