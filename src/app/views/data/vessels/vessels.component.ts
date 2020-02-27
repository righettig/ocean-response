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
  }

  ngOnInit() {
    this.reset();

    this.getVessels();

    this.subs.sink = this.vessels$.subscribe(data => {
      this.vessels = data;
    })
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

  vessels = [];
  vessel;
 
  private subs = new SubSink();

}
