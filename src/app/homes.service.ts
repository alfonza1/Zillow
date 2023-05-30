import { Injectable } from '@angular/core';
import { Housesinterface } from './housesinterface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housesinterface: Housesinterface[] = [
    {
      id: 0,
      name: '125 Idaho Ave, Los Angeles, CA 90025',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'https://photos.zillowstatic.com/fp/f31befdb72a0190e7b32fc174f5368b2-cc_ft_1536.jpg',
      availableUnits: 4,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "2"
      },
      {
      id: 1,
      name: '1112 2nd St , Los Angeles, CA 90025',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://www.techspot.com/images2/news/bigimage/2021/11/2021-11-02-image-27.jpg',
      availableUnits: 0,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "3"
      },
      {
      id: 2,
      name: '999 Juice Rd, Chicago, IL 18483',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/41/real-estate-contingencies-3d4ab5-1024x695.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes",
      bed: "4",
      bath: "3"
      },
      {
      id: 3,
      name: '21 Bridal Path, Toronto, ON 18483',
      city: 'Toronto',
      state: 'ON',
      photo: 'https://www.houseporn.ca/media/uploads/blog/drake_1.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes",
      bed: "5",
      bath: "4"
      },
      {
      id: 4,
      name: '63432 Terry St, Wilmington, De 19802',
      city: 'Wilmington',
      state: 'De',
      photo: 'https://images.marketleader.com/HouseImages/WIREX/554/f_1830554.jpg?PhotoAccessKey=0d6cbd693a838f27a4e3110d2f674591',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "4"
      },
      {
      id: 5,
      name: '32 Aree St, Oakland, CA 19222',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://rochesterlawcenter.com/wp-content/uploads/2022/01/putting-a-house-into-a-trust-768x576.jpg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "2"
      },
      {
      id: 6,
      name: '2 Sasuke Ave, San Diego, CA 19222',
      city: 'San Diego',
      state: 'CA',
      photo: 'https://media.architecturaldigest.com/photos/59de8016b237417e2f905bf2/16:9/w_2580,c_limit/01_RCHS-WD_Grazer_Ellis_247-Edit-Edit.jpg',
      availableUnits: 5,
      wifi: "yes",
      laundry: "yes",
      bed: "4",
      bath: "3"
      },
      {
      id: 7,
      name: '3294 Sand St, Portland, OR 19222',
      city: 'Portland',
      state: 'OR',
      photo: 'https://d1ja9tyo8nbkbc.cloudfront.net/45866257_S0020/S0020/S0020-R0100/NWM2070424/NWM134738160.jpg?version=1684595295&width=1024',
      availableUnits: 2,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "2"
      },
      {
      id: 8,
      name: '10048 Will St, Oakland, CA 19222',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://images.estately.net/139_NWM2033041_0_1675960698_636x435.jpg',
      availableUnits: 10,
      wifi: "yes",
      laundry: "yes",
      bed: "5",
      bath: "3"
      },
      {
      id: 9,
      name: '3622 Care St, Miami, FL 19222',
      city: 'Miami',
      state: 'FL',
      photo: 'https://www.papercitymag.com/wp-content/uploads/2021/07/img-1-1-1.jpeg',
      availableUnits: 1,
      wifi: "yes",
      laundry: "yes",
      bed: "3",
      bath: "2"
      },
      {
      id: 10,
      name: 'Darley Green Apartments',
      city: 'Claymont',
      state: 'De',
      photo: 'https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_xl/7c00a86129eeb6bf981aa57650a2cbfe',
      availableUnits: 10,
      wifi: "yes",
      laundry: "yes",
      bed: "2",
      bath: "2"
      },
      {
      id: 11,
      name: 'Lavere Realty Apartments',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1',
      availableUnits: 10,
      wifi: "yes",
      laundry: "yes",
      bed: "2",
      bath: "2"
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