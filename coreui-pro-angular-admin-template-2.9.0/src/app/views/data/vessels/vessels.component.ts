import { Component, ViewChild } from '@angular/core';
import { VesselService } from '../../../store/vessels.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'vessels.component.html'
})
export class VesselsComponent {

  @ViewChild(NgForm) public formGroup: NgForm;
  
  constructor(private vesselService: VesselService) {
  }

  ngOnInit() {
    this.reset();
  }

  vessels = [
    { name: "Tiny Vessel", position: "pos1", size: 5 },
    { name: "Big Vessel", position: "pos2", size: 50 },
  ]

  save() {
    debugger;
    this.vesselService.add(this.vessel).subscribe(result => {
      this.reset();
    })
  }

  reset() {
    this.vessel = { name: "", position: "", size: 0 };
  }

  vessel;

}
