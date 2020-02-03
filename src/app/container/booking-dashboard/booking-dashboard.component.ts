import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

export interface FlightInfo {
  duration: string;
  price: any;
  arrival: any;
  departure: any;
}

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.scss']
})
export class BookingDashboardComponent {

  // **************** Flight object ****************//
  flightObj: FlightInfo[] = [
    { departure: { name: 'Air India', img: 'airindia.gif', code: 'DEL', city: 'New Delhi', country: 'India', time: '17:45' }, duration: '2h 20m', arrival: { arrival1: '00:35', code: 'BOM', city: 'Mumbai', country: 'India' }, price: { price1: 4146, emi: 1172 } },
    { departure: { name: 'Vistara', img: 'vistara.gif', code: 'DEL', city: 'New Delhi', country: 'India', time: '18:40' }, duration: '2h 15m', arrival: { arrival1: '00:35', code: 'GOA', city: 'GOA', country: 'India' }, price: { price1: 7142, emi: 2171 } },
    { departure: { name: 'Spicejet', img: 'spicejet.png', code: 'DEL', city: 'New Delhi', country: 'India', time: '13:25' }, duration: '2h 40m', arrival: { arrival1: '00:35', code: 'BOM', city: 'Mumbai', country: 'India' }, price: { price1: 2146, emi: 3174 } },
    { departure: { name: 'IndiGo', img: 'indigo.gif', code: 'DEL', city: 'New Delhi', country: 'India', time: '10:15' }, duration: '1h 10m', arrival: { arrival1: '00:35', code: 'BOM', city: 'Mumbai', country: 'India' }, price: { price1: 1141, emi: 2271 } }
  ];

  sortedData: FlightInfo[];

  constructor() {
    this.sortedData = this.flightObj.slice();
  }

  // ********** Sorting based on user action ************//
  sortData(sort: Sort) {
    const data = this.flightObj.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'departure': return compare(a.departure, b.departure, isAsc);
        case 'duration': return compare(a.duration, b.duration, isAsc);
        case 'arrival': return compare(a.arrival, b.arrival, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }

}

// ******** filter table data based on Asc/Dec *************//
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
