import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class EmergenciesMapsComponent {
  title: string = '';
  lat: number = 55.777190;
  lng: number = 3.479711;
  zoom: number = 5;

  markers: Marker[] = [
    {
      lat: 58.277190,
      lng: -0.779711,
      label: 'A',
      draggable: false,
      title: 'Emergency 1',
      www: 'https:/sea.live'
    },
    {
      lat: 53.777190,
      lng: 3.479711,
      label: 'B',
      draggable: false,
      title: 'Emergency 2',
      www: 'https:/sea.live'
    },
    {
      lat: 57.077190,
      lng: 5.479711,
      label: 'C',
      draggable: false,
      title: 'Emergency 3',
      www: 'https:/sea.live'
    }
  ];
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title: string;
  www: string;
}
