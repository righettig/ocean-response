import { Component, ViewChild } from '@angular/core';
import { VesselService } from '../../../store/vessels.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { Vessel } from '../../../models/vessel';

@Component({
  templateUrl: 'vessels.component.html'
})
export class VesselsComponent {

  @ViewChild(NgForm) public formGroup: NgForm;
  
  constructor(private vesselService: VesselService) {     
    this.vessels$ = vesselService.entities$;
    //this.loading$ = vesselService.loading$;
  }

  ngOnInit() {
    this.reset();

    this.getVessels();

    this.subs.sink = this.vessels$.subscribe(data => {
      debugger;
      this.vessels = data;
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
    this.vesselService.add(this.vessel).subscribe(result => {
      this.reset();
    })
  }

  delete(vessel: Vessel) {
    this.vesselService.delete(vessel);
  }

  reset() {
    this.vessel = { name: "", position: "", size: 0 };
  }

  getVessels() {
    // TODO: the server should only return the items belonging to the current user
    this.vesselService.getAll();
  }

  vessels$: Observable<Vessel[]>;
  loading$: Observable<boolean>;
 
  private subs = new SubSink();

  vessels = [];
  vessel;

}
