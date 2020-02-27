import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmergencyService } from '../../../store/emergency.service';
import { Observable } from 'rxjs';
import { Vessel } from '../../../models/vessel';
import { SubSink } from 'subsink';
import { Emergency } from '../../../models/emergency';

@Component({
  templateUrl: 'emergencies.component.html'
})
export class EmergenciesComponent {

  @ViewChild(NgForm) public formGroup: NgForm;
  
  constructor(private emergencyService: EmergencyService) {
    this.emergencies$ = emergencyService.entities$;
    //this.loading$ = emergencyService.loading$;
  }

  ngOnInit() {
    this.reset();

    this.getEmergencies();

    this.subs.sink = this.emergencies$.subscribe(data => {
      debugger;
      this.emergencies = data;
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

  save() {
    this.emergencyService.add(this.emergency).subscribe(result => {
      this.reset();
    })
  }

  delete(emergency: Emergency) {
    this.emergencyService.delete(emergency);
  }

  reset() {
    this.emergency = { name: "", position: "", size: 0 };
  }

  getEmergencies() {
    // TODO: the server should only return the items belonging to the current user
    this.emergencyService.getAll();
  }

  emergencies$: Observable<Emergency[]>;
  loading$: Observable<boolean>;
 
  private subs = new SubSink();

  emergencies = [];
  emergency;

}
