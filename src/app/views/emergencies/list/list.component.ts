import { Component } from '@angular/core';
import { EmergencyService } from '../../../store/emergency.service';
import { Observable } from 'rxjs';
import { Emergency } from '../../../models/emergency';
import { SubSink } from 'subsink';
import { SearchService } from './search.service';

@Component({
  templateUrl: 'list.component.html'
})
export class ListComponent {

  constructor(
    private emergencyService: EmergencyService,
    private searchService: SearchService) {

    this.emergencies$ = emergencyService.entities$;
  }

  ngOnInit() {
    this.getEmergencies();

    this.subs.sink = this.emergencies$.subscribe(data => {
      this.emergencies = data;

      if (this.emergencies.length > 0) {
        this.emergency = this.emergencies[0]
      }
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getEmergencies() {
    // TODO: the server should only return the items belonging to the current user
    this.emergencyService.getAll();
  }

  search() {
    this.searchService.search(
      this.emergency.id, this.responseRadius, this.positionsReceivedInLast)
      
      .subscribe((data: any) => {
        this.availableVessels = data;
      })
  }

  emergencies$: Observable<Emergency[]>;
  loading$: Observable<boolean>;

  emergencies = [];

  emergency: Emergency;
  responseRadius = 10;
  positionsReceivedInLast = 24;

  availableVessels = [
    {
      id: 1,
      name: "Tiny Vessel",
      lat: 58.277190,
      lng: -0.779711,
      size: 5
    },
    {
      id: 2,
      name: "Big Vessel",
      lat: 58.277190,
      lng: -0.779711,
      size: 50
    }
  ]

  private subs = new SubSink();

}
