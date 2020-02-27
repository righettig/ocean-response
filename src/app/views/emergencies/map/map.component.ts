import { Component } from '@angular/core';
import { EmergencyService } from '../../../store/emergency.service';
import { Observable } from 'rxjs';
import { Vessel } from '../../../models/vessel';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class EmergenciesMapsComponent {

  constructor(private emergencyService: EmergencyService) {
    this.emergencies$ = emergencyService.entities$;
    //this.loading$ = emergencyService.loading$;
  }

  ngOnInit() {
    this.getEmergencies();

    this.subs.sink = this.emergencies$.subscribe(data => {
      debugger;
      this.markers = data.map(el => {
        return {
          lat: el.lat,
          lng: el.lng,
          label: el.name[0].toUpperCase(),
          draggable: false,
          title: el.name,
          www: 'https:/sea.live'
        }
      });
    })

    // this.subs.sink = this.loading$.subscribe(data => {
    //   if (data) {
    //     this.loadingBar.start();
    //   } else {
    //     this.loadingBar.stop();
    //   }
    // })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getEmergencies() {
    // TODO: the server should only return the items belonging to the current user
    this.emergencyService.getAll();
  }

  emergencies$: Observable<Vessel[]>;
  loading$: Observable<boolean>;

  title: string = '';
  lat: number = 55.777190;
  lng: number = 3.479711;
  zoom: number = 6;

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

  private subs = new SubSink();

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